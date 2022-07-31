import React ,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductTable from './ProductTable'

function App() {
  return (
    <div className="App">
      <ProductTable price="5" name="jus d'orange" category="jus"/>
    </div>
  );
}

export default App;
