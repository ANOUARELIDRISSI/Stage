import React, { useState } from 'react';
import axios from 'axios';

const ProductRecommendations = () => {
    const [recommendations, setRecommendations] = useState([]);

    const getRecommendations = async (title) => {
        try {
            const response = await axios.post('http://localhost:5000/recommend', { title });
            setRecommendations(response.data); // Set the received data to the state
        } catch (error) {
            console.error("There was an error fetching the recommendations!", error);
        }
    };

    // Example: Fetch recommendations for 'Argan Oil' on component mount
    React.useEffect(() => {
        getRecommendations('Argan Oil');
    }, []);

    return (
        <div>
            <h1>Product Recommendations</h1>
            <ul>
                {recommendations.map((product, index) => (
                    <li key={index}>
                        <h2>{product.Title}</h2>
                        <p>Category: {product.Category}</p>
                        <p>Sub-Category: {product['Sub-Category']}</p>
                        <p>Price: {product.Price}</p>
                        <p>Ratings: {product.Ratings}</p>
                        <p>Total Ratings: {product['Total Ratings']}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductRecommendations;
