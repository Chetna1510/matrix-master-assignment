import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function ShowProduct() {
    const params = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const addedProducts = JSON.parse(localStorage.getItem('Products')) || [];
        
        // Find the specific product by ID
        const foundProduct = addedProducts.find(
            (p) => p.id === Number(params.productId)
        );
        
        setProduct(foundProduct);

    }, [params.productId]);

    // Show loading or not found message
    if (!product) {
        return (
            <div className="container mt-4">
                <h2>Product not found</h2>
                <Link to="/">Go back</Link>
            </div>
        );
    }

    return (
        <div className="container mt-4">
            <h2>Product Details</h2>
            <p><strong>Name:</strong> {product.name}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Description:</strong> {product.description}</p>
            <Link to="/" className="btn btn-secondary me-2">
                Go back
            </Link>
            <Link to={`/products/edit/${product.id}`} className="btn btn-warning">
                Edit
            </Link>
        </div>
    );
}