import React, {useState} from 'react'
import { Link } from 'react-router-dom';

export default function NewProduct() {
    const [newProduct, addProduct] = useState({id: 0});
    const [error, setError] = useState();
    
    const changeHandler = (e) => {
        const name = e.target.name
        const value = e.target.value
        addProduct((prev) => ({
            ...prev, 
            [name]: value
        })) // it will store all the inputs keys and values in state as json
    }

    const createProductHandler = () => {
        if (!newProduct.name) {
            setError('Enter your product details');
            return;
        }

        // Always read as array
        let storedProducts = JSON.parse(localStorage.getItem('Products')) || [];

        // If it's not an array (because of earlier mistake), wrap it
        if (!Array.isArray(storedProducts)) {
            storedProducts = [storedProducts];
        }
        
        const alreadyExists = storedProducts.some(
            (p) => p.name === newProduct.name
        );

        if (alreadyExists) {
            setError('Product is already added! Create a new product');
        } else {

            // Generate ID
            const newId = storedProducts.length + 1;
            const productToAdd = { ...newProduct, id: newId };

            storedProducts.push(productToAdd);
            localStorage.setItem('Products', JSON.stringify(storedProducts));
            setError('');
        }
    };


    return (
        <div className="container mt-4">
        <h2> Product</h2>
        <form>
            <div className="mb-3">
            <label>Name</label>
            <input name="name" className="form-control" value={newProduct.name || ''} onChange={changeHandler} />
            </div>
            <div className="mb-3">
            <label>Price</label>
            <input name="price" type="number" className="form-control" value={newProduct.price || ''} onChange={changeHandler} />
            </div>
            <div className="mb-3">
            <label>Description</label>
            <textarea name="description" className="form-control" value={newProduct.description || ''} onChange={changeHandler} />
            </div>
        </form>
        { 
          error && <h1>{error}</h1>
        }
        <button className="btn btn-success" onClick={createProductHandler}>
            <Link to="/">Create</Link>
        </button>

        <Link to="/">Go back</Link>
        </div>
    )
}
