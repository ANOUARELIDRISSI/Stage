from flask import Flask, request, jsonify
from flask_cors import CORS  # Ajoutez cette importation
import pickle
import string
import nltk
from nltk.corpus import stopwords
from nltk.stem.porter import PorterStemmer

app = Flask(__name__)
CORS(app)  # Ajoutez cette ligne pour permettre les requêtes CORS

# Charger les modèles
tfidf = pickle.load(open('vectorizer.pkl', 'rb'))
model = pickle.load(open('model.pkl', 'rb'))

ps = PorterStemmer()

def transform_text(text):
    text = text.lower()
    text = nltk.word_tokenize(text)

    y = [i for i in text if i.isalnum()]
    text = y[:]
    y.clear()

    y = [i for i in text if i not in stopwords.words('english') and i not in string.punctuation]
    text = y[:]
    y.clear()

    y = [ps.stem(i) for i in text]

    return " ".join(y)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    message = data['message']
    transformed_sms = transform_text(message)
    vector_input = tfidf.transform([transformed_sms])
    result = model.predict(vector_input)[0]

    return jsonify({'result': 'Spam' if result == 1 else 'Not Spam'})

if __name__ == '__main__':
    app.run(debug=True)
