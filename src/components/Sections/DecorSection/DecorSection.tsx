import './DecorSection.css'
import React from "react";
import { BottomRunningLine } from "../../RunningLines/BottomRunningLine.tsx";
import { Picture } from "../../Picture/Picture.tsx";
import { Pictures } from "../../Picture/pictures.ts";

export const DecorSection: React.FC = () => {
    return (
        <section className="section decor-section">
            <BottomRunningLine />
            <Picture {...Pictures[8]} />
        </section>
    )
}