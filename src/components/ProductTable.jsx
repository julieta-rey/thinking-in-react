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
            {products.map((product) => (
                <div key={product.name} className={product.stocked ? "" : "non-stocked"}>
                    {`${product.name} ${product.price}`}
                </div>
            ))}
        </div>
    );
}

export default List;