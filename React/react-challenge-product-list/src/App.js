import './App.css';
import ProductList from './pages/ProductList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewProduct from './pages/NewProduct';
import ShowProduct from './pages/ShowProduct';
import EditProduct from './pages/EditProduct';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/products/new" element={<NewProduct />} />            
            <Route path="/products/show/:productId" element={<ShowProduct />} />            
            <Route path="/products/edit/:productId" element={<EditProduct />} />            
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
