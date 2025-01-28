import React from 'react';
import './Header.css';
import {HeaderForDesktop} from "./HeaderForDesktop.tsx";
import {HeaderForMobile} from "./HeaderForMobile.tsx";

export const Header: React.FC = () => {
    return (
        <header>
            <HeaderForDesktop/>
            <HeaderForMobile/>
        </header>
    )
}