import './DecorSection.css'
import React from "react";
import { BottomRunningLine } from "../../RunningLines/BottomRunningLine.tsx";

export const DecorSection: React.FC = () => {
    return (
        <section className="section decor-section">
            <BottomRunningLine />
            <picture>
                <source className="bottom-foreign-text" media="(min-width: 414px)" srcSet="/assets/images/vector/foreign_text_on_background_desktop.svg" />
                <img className="bottom-foreign-text" src="/public/assets/images/vector/foreign_text_on_background_mobile.svg" alt="foreign text on green background" />
            </picture>
        </section>
    )
}