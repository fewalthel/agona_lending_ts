import React from 'react';
import './ProductCard.css';

export const ProductCard: React.FC<{name: string, description: string, pathToImage: string, alt: string}> = ({name, description, pathToImage, alt}) => {
    return (
        <div className="product-card">
            <img src="/assets/images/vector/product_card_background.svg" alt="product card background"/>
            <div className="container-for-product-info">
                <p className="product-description">{description}</p>
                <p className="product-name">{name}</p>
                <img src={pathToImage} alt={alt}/>
            </div>
        </div>
    )
}