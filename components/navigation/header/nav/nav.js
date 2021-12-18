import classes from './nav.module.css';
import Link from "next/link";

const Nav = () => {
    return (
        <nav className={`ms-auto`}>
            <ul className={`d-flex align-items-center ${classes.Nav}`}>



                <li className="nav-item ">
                    <Link href="#">
                        <a className={`nav-link ${classes.Icon}`}>
                            <i className="bi bi-bell"/>
                            <span className="badge bg-primary ">4</span>
                        </a>
                    </Link>

                </li>





            </ul>
        </nav>
    );
};

export default Nav;