import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import s from './header.module.scss';
import logo from "./../../image/Nasa_logo.png";

const Header = () => {
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);

    const toggleBurger = () => {
        if (window.innerWidth <= 767) {    
            setIsBurgerOpen(!isBurgerOpen);
            if (!isBurgerOpen) {
                document.body.classList.add('menu-open');
            } else {
                document.body.classList.remove('menu-open');
            }
        }
    };
    const toggleBurgerLogo = () => {
        setIsBurgerOpen(false);
        document.body.classList.remove('menu-open');
    };

    return (
        <div className={s.wrapper}>
        <NavLink to="/" className={s.logo} onClick={toggleBurgerLogo}>
            <img src={logo} className={s.logoimg} alt="Логотип" />
            <p className={s.title} translate="no">Everyday</p>
        </NavLink>
        <div className={`${s.nav} ${isBurgerOpen ? s.active : ""}`}>
            <NavLink to="/application" onClick={toggleBurger}>Застосунок</NavLink>
            <NavLink to="/docs" onClick={toggleBurger}>Документація</NavLink>
            <NavLink to="/contact" onClick={toggleBurger}>Контакти</NavLink>
        </div>
        <div className={`${s.burger} ${isBurgerOpen ? s.active : ""}`} onClick={toggleBurger}>
            <span></span>
        </div>
        </div>
    );
};

export default Header;
