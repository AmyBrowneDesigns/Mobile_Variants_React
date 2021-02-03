import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({products}) => {
    const productsNodes = products.map(product => {
        return ( 
            <ProductItem size = {product.size} color ={product.color} grade ={product.grade} price ={product.price}></ProductItem>
        );
    });
    return (
        <>
        {productsNodes}
        </>
    );
}

export default ProductList;