import React from 'react';

export const HeaderForDesktop: React.FC = () => {
    return (
            <div className="header-for-desktop">
                <nav className="navigation-desktop">
                    <ul>
                        <li><button>go back</button></li>
                        <li><a href="">story</a></li>
                        <li><a href="">shop</a></li>
                        <li><a href="#top">
                            <img className="logo" src="/assets/images/vector/logo.svg" alt="logo for desktop"/>
                        </a></li>
                        <li><a href="">contact</a></li>
                        <li><a href="">wholesale</a></li>
                        <li><button>clone</button></li>
                    </ul>
                </nav>
            </div>
    )
}