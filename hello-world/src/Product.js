import React from "react";


function Product(props) {
    return (
        <>
            <p>產品名稱：{props.name}</p>
            <p>價格：{props.price}元</p>
            <button onClick={props.onBuy}>購買</button>
        </>
    );
};

export default Product;