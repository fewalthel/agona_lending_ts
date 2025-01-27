import React from "react";
import './ProductsSection.css';
import { Products, IProductCard } from '../../ProductCards/products.ts';
import { ProductCard } from "../../ProductCards/ProductCard.tsx";
import { AverageRunningLine } from "../../RunningLines/AverageRunningLine.tsx";
import { ContainerForFires } from "../../ContainerForFires/ContainerForFires.tsx";

export const ProductsSection: React.FC = () => {
    return (
            <section className="section products-section">
                <div className="container container-for-slogan">
                    <img src="/assets/images/vector/scorpion_looks_right.svg" alt="picture of scorpion which looks right"/>
                    <p>THROW SOME LAVA<br/>IN YOUR JAVA</p>
                    <img src="/assets/images/vector/scorpion_looks_left.svg" alt="picture of scorpion which looks left"/>
                </div>
                <div className="container-for-products-cards-and-fires">
                    <ContainerForFires/>
                    <div className="container-for-cards">
                        {Products.map((product: IProductCard) => (
                            <ProductCard {...product} key={product.name} />
                        ))}
                    </div>
                </div>
                <AverageRunningLine/>
                <picture>
                    <source className="products-section-img" media="(min-width: 1440px)" srcSet="/assets/images/large/syrup_in_cup_large.jpg"/>
                    <source className="products-section-img" media="(min-width: 1024px)" srcSet="/assets/images/medium/syrup_in_cup_medium.jpg"/>
                    <img className="products-section-img" src="/assets/images/small/syrup_in_cup_small.jpg" alt="syrup in cup"/>
                </picture>
            </section>
    )
}