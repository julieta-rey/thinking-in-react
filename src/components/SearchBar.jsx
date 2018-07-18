import React from 'react';
const SearchBar = () => (
    <div>
        <div>
            <input placeholder="Search..." type="text"/>
        </div>
        <div>
            <input type="checkbox" name="" id="check"/>
            <label htmlFor="check">Only show products in stock</label>
        </div>
    </div>
);

export default SearchBar;