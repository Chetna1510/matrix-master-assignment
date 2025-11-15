import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProductList() {
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        const addedProducts = JSON.parse(localStorage.getItem('Products')) || [];
        setAllProducts(addedProducts);
    }, []);

    const handleDelete = (id) => {
        const updated = allProducts.filter(p => p.id !== id);
        setAllProducts(updated);
        localStorage.setItem('Products', JSON.stringify(updated));
    };


  return (
    <div className="container mt-4">
      <h2>All Products</h2>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
          allProducts ?
          allProducts.map((product, index) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>${product.price}</td>
              <td>
                <button className="btn btn-info btn-sm me-2">
                    <Link to={`/products/show/${product.id}`}>Show</Link>
                </button>
                <button className="btn btn-warning btn-sm me-2"> 
                    <Link to={`/products/edit/${product.id}`}>Edit</Link>
                </button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(product.id)}>
                    Delete
                </button>
              </td>
            </tr>
          ))
          : null
        }
        </tbody>
        </table>
        <Link to="/products/new">Add Product</Link>
    </div>
  );
}
