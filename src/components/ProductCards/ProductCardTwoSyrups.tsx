import React from "react";

export const ProductCardTwoSyrups : React.FC = () => {
    return (
    <div className="product-card">
        <img
            src="/assets/images/vector/product_card_background.svg"
            alt="product card background"/>
        <div
            className="container-for-product-info">
            <p className="product-description">light
                &
                dark
                roast</p>
            <p className="product-name">UJJO
                SAMPLER
                PACK</p>
            <img
                src="/assets/images/vector/two_syrups.svg"
                alt="two syrups"/>
        </div>
    </div>
    )
}