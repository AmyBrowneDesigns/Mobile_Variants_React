import { render } from "@testing-library/react";
import React, {useState, useEffect} from "react";
import ProductList from "../components/ProductList";

const DisplayBox = () => {
    const [products, setProducts] = useState ([])
    useEffect(()=>{
        showProducts()
    }, [])
    const showProducts = () => {
        setProducts (

        [
            {
                id : 1,
                size : '64GB',
                color : 'Black',
                grade : 'A',
                price : 100
            },
            {
                id : 2,
                size : '64GB',
                color : 'Black',
                grade : 'B',
                price : 100
            },
            {
                id : 3,
                size : '64GB',
                color : 'White',
                grade : 'A',
                price : 100
            },
            {
                id : 4,
                size : '64GB',
                color : 'White',
                grade : 'B',
                price : 120
            },
            {
                id : 5,
                size : '64GB',
                color : 'Red',
                grade : 'C',
                price : 60
            },
            {
                id : 6,
                size : '128GB',
                color : 'Black',
                grade : 'A',
                price : 150
            },
            {
                id : 7,
                size : '128GB',
                color : 'Red',
                grade : 'A',
                price : 150
            }
        ]
    )
    }

        return (
        <>
        <h1>All Our Phones</h1>
        <ProductList products={products}/>
        </>
        );
}

export default DisplayBox;