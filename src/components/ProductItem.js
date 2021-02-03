import React from "react";

const ProductItem = ({size, color, grade, price}) => {
    return (
        <>
        <h4>{size}&nbsp;{color}&nbsp;{grade}&nbsp;{price}</h4>
        </>
    );
}

export default ProductItem;