import React from 'react';
const List = ({products}) => {
    let categories = [];
    products.forEach((product)=>{
        if (categories.indexOf(product.category) < 0 ) categories.push(product.category);
    });
    return (
            <div>
            <div style={{ display:"inline-block"}}>
                <b>Name</b>
            </div>
            <div style={{ display:"inline-block"}}>
                <b>Price</b>
            </div>
            {categories.map((category) =>(<b>{category}</b>))}
        </div>
    );
}

export default List;