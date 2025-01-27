import React from 'react';

export const HeaderForMobile: React.FC = () => {
    return (
            <div className="header-for-mobile">
                <div className="container container-for-visible_nav">
                    <input id="checkbox" className="checkbox" type="checkbox"/>
                    <label htmlFor="checkbox">
                        <button className="burger-menu-button"/>
                    </label>
                    <nav className="navigation-mobile">
                        <div className="dropdown-menu">
                            <ul>
                                <li><a href="">story</a></li>
                                <li><a href="">shop</a></li>
                                <li><a href="">contact</a></li>
                                <li><a href="">wholesale</a></li>
                            </ul>
                        </div>
                    </nav>
                    <a href="#top">
                        <img className="logo" src="/assets/images/vector/mobile_logo.svg" alt="logo for mobile"/>
                    </a>
                    <button className="users-button"/>
                </div>
            </div>
    )
}