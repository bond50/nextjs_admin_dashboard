import React from 'react';
import Link from 'next/link'
import classes from './logo.module.css'

const Logo = () => {
    return (
        <div className="d-flex align-items-center justify-content-between">
            <Link href={`/`}>
                <a className={`${classes.Logo} d-flex align-items-center`}>
                    <img src={`/logo/logo.png`} alt="logo"/>
                    <span className="d-none d-lg-block">VCRH administration</span>
                </a>
            </Link>
            <i className={`bi bi-list ${classes.ToggleButton}`}/>
        </div>
    );
};

export default Logo;