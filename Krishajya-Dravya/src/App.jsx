import React from 'react';
import HaderHome from './component/home/haderHome';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductAdd from "./component/home/ProductAdd"; // fixed path
import Order from './component/orders/order';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HaderHome />} />
        <Route path="/add-product" element={<ProductAdd />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </Router>
  );
}

export default App;
