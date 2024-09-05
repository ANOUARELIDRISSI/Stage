

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductAnalysis = () => {
    const [predictedGrowth, setPredictedGrowth] = useState([]);
    const [leastSoldProducts, setLeastSoldProducts] = useState([]);

    useEffect(() => {
        // Fetch predicted monthly growth
        const fetchPredictedGrowth = async () => {
            try {
                const response = await axios.get('http://localhost:5000/predict_growth');
                setPredictedGrowth(response.data);
            } catch (error) {
                console.error("Error fetching predicted growth:", error);
            }
        };

        // Fetch least sold products
        const fetchLeastSoldProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/least_sold_products');
                setLeastSoldProducts(response.data);
            } catch (error) {
                console.error("Error fetching least sold products:", error);
            }
        };

        fetchPredictedGrowth();
        fetchLeastSoldProducts();
    }, []);

    return (
        <div>
            <h1>Product Analysis</h1>

            <h2>Predicted Monthly Growth</h2>
            <ul>
                {predictedGrowth.map((item, index) => (
                    <li key={index}>
                        Product ID: {item.product_id}, Date: {item.sale_date}, Predicted Sales: {item.predicted_sales}
                    </li>
                ))}
            </ul>

            <h2>Least Sold Products</h2>
            <ul>
                {leastSoldProducts.map((item, index) => (
                    <li key={index}>
                        Product ID: {item.product_id}, Total Sales: {item.quantity}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductAnalysis;
