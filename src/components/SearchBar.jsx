import React from 'react';
const SearchBar = (props) => (
    <div>
        <div>
            <input placeholder="Search..." type="text" onChange={props.handleFilter}/>
        </div>
        <div>
            <input type="checkbox" name="" id="check" onChange={props.handleStock}/>
            <label htmlFor="check">Only show products in stock</label>
        </div>
    </div>
);

export default SearchBar;