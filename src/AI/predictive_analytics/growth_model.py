# Filename: growth_model.py

import mysql.connector
import pandas as pd
from sklearn.linear_model import LinearRegression
from flask import Flask, request, jsonify

# Connect to MySQL database
def connect_db():
    conn = mysql.connector.connect(
        host="your_host",
        user="your_username",
        password="your_password",
        database="your_database"
    )
    return conn

# Fetch and preprocess data
def fetch_data():
    conn = connect_db()
    query = "SELECT * FROM sales_data"
    data = pd.read_sql(query, conn)
    conn.close()

    # Convert date columns to datetime
    data['sale_date'] = pd.to_datetime(data['sale_date'])

    # Sort data by date
    data.sort_values('sale_date', inplace=True)

    # Aggregate monthly sales
    monthly_sales = data.groupby([data['sale_date'].dt.to_period('M'), 'product_id']).agg({
        'quantity': 'sum'
    }).reset_index()

    # Convert period to datetime for ease of use
    monthly_sales['sale_date'] = monthly_sales['sale_date'].dt.to_timestamp()

    # Prepare the dataset for growth prediction
    monthly_sales['previous_sales'] = monthly_sales.groupby('product_id')['quantity'].shift(1)
    monthly_sales.dropna(inplace=True)

    return monthly_sales

# Train the model
def train_model(monthly_sales):
    X = monthly_sales[['sale_date', 'previous_sales']]
    y = monthly_sales['quantity']

    # Convert dates to ordinal
    X['sale_date'] = X['sale_date'].map(pd.Timestamp.toordinal)

    model = LinearRegression()
    model.fit(X, y)
    return model

# Predict monthly growth
def predict_growth(model, monthly_sales):
    X = monthly_sales[['sale_date', 'previous_sales']]
    X['sale_date'] = X['sale_date'].map(pd.Timestamp.toordinal)
    monthly_sales['predicted_sales'] = model.predict(X)
    return monthly_sales

# Identify least sold products
def identify_least_sold(monthly_sales):
    total_sales = monthly_sales.groupby('product_id').agg({'quantity': 'sum'}).reset_index()
    least_sold_products = total_sales.sort_values(by='quantity').head(10)
    return least_sold_products

# Flask API setup
app = Flask(__name__)

@app.route('/predict_growth', methods=['GET'])
def get_predicted_growth():
    monthly_sales = fetch_data()
    model = train_model(monthly_sales)
    predicted_growth = predict_growth(model, monthly_sales)
    return jsonify(predicted_growth[['sale_date', 'product_id', 'predicted_sales']].to_dict(orient='records'))

@app.route('/least_sold_products', methods=['GET'])
def get_least_sold_products():
    monthly_sales = fetch_data()
    least_sold = identify_least_sold(monthly_sales)
    return jsonify(least_sold.to_dict(orient='records'))

if __name__ == '__main__':
    app.run(debug=True)
