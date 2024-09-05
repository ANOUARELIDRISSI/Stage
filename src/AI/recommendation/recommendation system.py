from flask import Flask, request, jsonify
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.cluster import DBSCAN, KMeans
import joblib

# Load the dataset
data = pd.read_csv('moroccan_ecommerce_data.csv')
data['Price'] = pd.to_numeric(data['Price'], errors='coerce')
data['Ratings'] = pd.to_numeric(data['Ratings'], errors='coerce')
data['Total Ratings'] = pd.to_numeric(data['Total Ratings'], errors='coerce')
data.fillna({
    'Price': data['Price'].mean(),
    'Ratings': data['Ratings'].mean(),
    'Total Ratings': data['Total Ratings'].mean()
}, inplace=True)

# Combine relevant columns into a single feature
data['Features'] = data['Title'] + ' ' + data['Category'] + ' ' + data['Sub-Category']

# Define the feature transformation steps
preprocessor = ColumnTransformer(
    transformers=[
        ('text', TfidfVectorizer(stop_words='english'), 'Features'),
        ('numeric', StandardScaler(), ['Price', 'Ratings', 'Total Ratings']),
        ('categorical', OneHotEncoder(), ['Category', 'Sub-Category'])
    ]
)

# Transform the features and compute the similarity matrix
feature_matrix = preprocessor.fit_transform(data)
cosine_sim = cosine_similarity(feature_matrix, feature_matrix)

# Clustering using DBSCAN
dbscan = DBSCAN(eps=0.5, min_samples=5)
dbscan.fit(feature_matrix)

# Function to get recommendations
def get_recommendations(title, cluster_label, n_recommendations=5):
    # Get the indices of products in the same cluster
    cluster_indices = [i for i, label in enumerate(dbscan.labels_) if label == cluster_label]

    # Get the index of the product that matches the title
    indices = pd.Series(data.index, index=data['Title']).drop_duplicates()
    idx = indices[title]

    # Get the pairwise similarity scores within the cluster
    sim_scores = [(i, cosine_sim[idx][i]) for i in cluster_indices]
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
    sim_scores = sim_scores[:n_recommendations]
    product_indices = [i[0] for i in sim_scores]

    return data[['Title', 'Category', 'Sub-Category', 'Price', 'Ratings', 'Total Ratings']].iloc[product_indices]

# Save models
joblib.dump(dbscan, 'dbscan_model.joblib')
joblib.dump(preprocessor, 'preprocessor.joblib')

# Create Flask API
app = Flask(__name__)

@app.route('/recommend', methods=['POST'])
def recommend():
    data = request.json
    title = data.get('title')

    # Load models
    dbscan = joblib.load('dbscan_model.joblib')
    preprocessor = joblib.load('preprocessor.joblib')

    # Process the input title and get recommendations
    cluster_label = dbscan.labels_[data[data['Title'] == title].index[0]]
    recommendations = get_recommendations(title, cluster_label)
    return jsonify(recommendations.to_dict(orient='records'))

if __name__ == '__main__':
    app.run(debug=True)
