import React from 'react';
import HaderHome from './component/home/haderHome';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductAdd from "./component/home/ProductAdd";
import Order from './component/orders/order';
import Contact from './component/contact/contact';
import Cart from './component/cart/cart';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HaderHome />} />
        <Route path="/add-product" element={<ProductAdd />} />
        <Route path="/order" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
