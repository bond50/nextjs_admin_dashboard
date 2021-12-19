import React from 'react';
import Header from "../header/header";
import AdminSidebar from "../sidebar/admin-sidebar";
import classes from './layout.module.css'
import PageTitle from "../page_title/page-title";
import useToggle from "../hooks/useToggle";


const Layout = ({children, pageTitle}) => {
    const [closed, toggleClosed] = useToggle();
    let attachedClasses = [classes.Main];

    if (closed) {
        attachedClasses = [classes.Close];
    }

    return (
        <>
            <Header clicked={toggleClosed}/>
            <AdminSidebar closed={closed}/>

            <main className={attachedClasses.join(' ')}>
                {pageTitle && <PageTitle title={pageTitle}/>}
                {children}
            </main>
        </>
    );
};

export default Layout;