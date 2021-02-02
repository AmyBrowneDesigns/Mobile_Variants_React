import React from "react";
import ProductList from "../components/ProductList";

const DisplayBox = () => {
    const [Products, setProducts] = useState(
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
    return (
        <>
        <h1>I'm the display box for all the phones to show</h1>
        <ProductList/>
        </>
    );
}

export default DisplayBox;