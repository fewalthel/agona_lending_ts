import React from "react";
import './Main.css';
import {InfoSection} from '../Sections/InfoSection/InfoSection.tsx'
import {ProductsSection} from "../Sections/ProductsSection/ProductsSection.tsx";
import {StorySection} from "../Sections/StorySection/StorySection.tsx";
import {DecorSection} from "../Sections/DecorSection/DecorSection.tsx";

export const Main: React.FC = () =>  {
    return (
        <main>
            <InfoSection/>
            <ProductsSection/>
            <StorySection/>
            <DecorSection/>
        </main>
    )
}