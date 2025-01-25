import React from "react";

export const ProductCardOnePirpleSyrup: React.FC = () => {
    return (
        <div
            className="product-card">
            <img
                src="/assets/images/vector/product_card_background.svg"
                alt="product card background"/>
            <div
                className="container-for-product-info">
                <p className="product-description">tangy
                    and
                    tingly</p>
                <p className="product-name">LIGHT
                    ROAST
                    BLEND</p>
                <img
                    src="/assets/images/vector/syrup_with_purple_label.svg"
                    alt="syrup with purple label"/>
            </div>
        </div>
    )
}