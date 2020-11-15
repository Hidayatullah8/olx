import React from 'react';

import HomePage from './components/HomePage';
import Product from './components/Product';
import Footer from "./components/Footer"
import "./StyleSheet/App.css";

function App() {
  return (
    <div className="App">
      <HomePage />
      <Product />
      <Footer />
      
      
    </div>
  );
}

export default App;
