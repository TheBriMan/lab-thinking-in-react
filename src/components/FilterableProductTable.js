import React, { Component } from "react";
import SearchBar from './components/SearchBar.js';
import ProductTable from './components/ProductTable.js';

class FilterableProductTable extends Component {
render() {
      <>
        <SearchBar />
        <ProductTable />
      </>
    }
}

export default FilterableProductTable