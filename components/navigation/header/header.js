import React from 'react';
import classes from './header.module.css'
import Logo from "./logo/logo";
import Nav from "./nav/nav";

const Header = () => {
    return (
        <header className={`${classes.Header} fixed-top d-flex align-items-center`}>
            <Logo/>
            <Nav/>
        </header>
    );
};

export default Header;