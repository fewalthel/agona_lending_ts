import React from "react";
import './ProductsSection.css';
import { Products, IProductCard } from '../../ProductCards/products.ts';
import { ProductCard } from "../../ProductCards/ProductCard.tsx";
import { RunningLine } from "../../RunningLines/RunningLine.tsx";
import { Fires } from "../../Fires/Fires.tsx";
import { Picture } from "../../Picture/Picture.tsx";
import { Pictures } from "../../Picture/pictures.ts";

export const ProductsSection: React.FC = () => {
    return (
            <section className="section products-section">
                <div className="container container-for-slogan">
                    <Picture {...Pictures[3]} />
                    <p>THROW SOME LAVA<br/>IN YOUR JAVA</p>
                    <Picture  {...Pictures[4]} />
                </div>
                <div className="container-for-products-cards-and-fires">
                    <Fires/>
                    <div className="container-for-cards">
                        {Products.map((product: IProductCard) => (
                            <ProductCard {...product} key={product.name} />
                        ))}
                    </div>
                </div>
                <RunningLine repeats={10} text={'put some fire in your belly'} id={'container-for-average-running-line'}/>
                <Picture {...Pictures[5]}/>
            </section>
    )
}