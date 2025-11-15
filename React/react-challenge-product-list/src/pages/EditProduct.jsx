import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

export default function EditProduct() {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const addedProducts = JSON.parse(localStorage.getItem('Products')) || [];
        
    // Find the specific product by ID
    const foundProduct = addedProducts.find(
        (p) => p.id === Number(params.productId)
    );
    setProduct(foundProduct);
  }, [params.productId]);

  // Handle input changes
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle update
  const updateProductHandler = () => {
    if (!product.name) {
      setError('Product Name is required');
      return;
    }

    let storedProducts = JSON.parse( localStorage.getItem('Products') ) || [];

    // Replace the product with the updated one
    const updatedProducts = storedProducts.map((p) =>
      p.id === product.id ? product : p
    );

    localStorage.setItem('Products', JSON.stringify(updatedProducts));
    setError('');

    // Navigate back to product list (or show page)
    navigate('/');
  };

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="container mt-4">
      <h2>Edit Product</h2>
      <form>
        <div className="mb-3">
          <label>Name</label>
          <input
            name="name"
            className="form-control"
            value={product.name || ''}
            onChange={changeHandler}
          />
        </div>
        <div className="mb-3">
          <label>Price</label>
          <input
            name="price"
            type="number"
            className="form-control"
            value={product.price || ''}
            onChange={changeHandler}
          />
        </div>
        <div className="mb-3">
          <label>Description</label>
          <textarea
            name="description"
            className="form-control"
            value={product.description || ''}
            onChange={changeHandler}
          />
        </div>
      </form>

      {error && <h5 className="text-danger">{error}</h5>}

      <button className="btn btn-success me-2" onClick={updateProductHandler}>
        Update
      </button>

      <Link to={`/products/show/${product.id}`} className="btn btn-info me-2">
        Show
      </Link>

      <Link to="/" className="btn btn-secondary">
        Home
      </Link>
    </div>
  );
}
