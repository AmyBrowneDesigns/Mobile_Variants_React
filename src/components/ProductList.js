import React from "react";
import ProductItem from "./ProductItem";

// const ProductList = ({products}) => {
//     const productsSizes = products.filter(product => {
//         return(
//             <ProductItem product = {product.size}/>
//         )});

//     // const productsNodes = products.map(product => {
//     //     return ( 
//     //         <ProductItem product = {product}></ProductItem>
//     //     )});

//         return (
//         <>
//         {/* {productsNodes} */}
//         {productsSizes}
//         </>
//         )};

// export default ProductList;

const ProductList = ({iphones, options}) => {
    //Render the options state with a button for each value
    //Map callback to return each element of the object.values as a button
    //Conditionally enable/disable the buttons based on if variants array has a valid matching combination
    //This will be with buttons using onClick functions
    //Conditionally rendering
    console.log(Object.values(options)[0]);
    console.log(Object.values(options)[1]);
    console.log(Object.values(options)[2]);
    
    const sizes = Object.values(options)[0]
    console.log(sizes)
   
    return(
        <>
        <h1>Phone List</h1>
        <ul>
            <li>
                <button>{options.size}</button></li>
            <li>
                <button>{options.color}</button></li>
            <li>
                <button>{options.grade}</button></li>
        </ul>
        </>
    )
}
export default ProductList