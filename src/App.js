import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products : [
        {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
        {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
        {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
        {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
        {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
        {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"},
      ]
    }
  }

  render() {
    return (
      <div style={{width:300}} className="App">
        <SearchBar/>
        <ProductTable products={this.state.products}  />
      </div>
    );
  }
}

export default App;
