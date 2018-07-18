import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable';

const PRODUCTS = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"},
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredProducts : PRODUCTS,
    }
  }

  handleStock = (event) => {
    const checkedStock = event.target.checked;
    this.setState({
      checkedStock
    }, () => this.applyFilters());
  }

  applyFilters = () => {
    let filteredProducts = PRODUCTS;
    if (this.state.checkedStock) {
      filteredProducts = filteredProducts.filter(product => product.stocked);
    }
    if (this.state.searchString) {
      filteredProducts = filteredProducts.filter(product => (
        product.name.includes(this.state.searchString)
      ));
    }
    this.setState({
      filteredProducts
    })
  }

  handleFilter = (event) => {
    const searchString = event.target.value;
    this.setState({
      searchString
    }, () => this.applyFilters());
  }

  render() {
    return (
      <div style={{width:300}} className="App">
        <SearchBar handleStock={this.handleStock} handleFilter={this.handleFilter}/>
        <ProductTable products={this.state.filteredProducts}  />
      </div>
    );
  }
}

export default App;
