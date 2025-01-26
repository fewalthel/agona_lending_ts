import React from "react";
import { TopRunningLine } from "../../RunningLines/TopRunningLine.tsx";

export const InfoSection: React.FC = () => {
    return (
        <section id="top" className="section info-section">
            <div
                className="left-column">
                <picture>
                    <source
                        media="(min-width: 414px)"
                        srcSet="/assets/images/vector/foreign_text_desktop.svg"/>
                    <img
                        src="/assets/images/vector/foreign_text_mobile.svg"
                        alt="foreign text"/>
                </picture>
                <TopRunningLine/>
                <picture>
                    <source
                        media="(min-width: 1440px)"
                        srcSet="/assets/images/large/syrup_around_cups_large.jpg"/>
                    <source
                        media="(min-width: 1024px)"
                        srcSet="/assets/images/medium/syrup_around_cups_medium.jpg"/>
                    <img
                        src="/assets/images/small/syrup_around_cups_small.jpg"
                        alt="syrup around cups"/>
                </picture>
            </div>
            <div
                className="right-column">
                <h1>THE FIRST HOT SAUCE MADE FOR COFFEE</h1>
                <picture>
                    <source
                        media="(min-width: 1440px)"
                        srcSet="/assets/images/large/syrup_in_hand_large.jpg"/>
                    <source
                        media="(min-width: 1024px)"
                        srcSet="/assets/images/medium/syrup_in_hand_medium.jpg"/>
                    <img
                        src="/assets/images/small/syrup_in_hand_small.jpg"
                        alt="syrup in hand"/>
                </picture>
            </div>
        </section>
    )
}