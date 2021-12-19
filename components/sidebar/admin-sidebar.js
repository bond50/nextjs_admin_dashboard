import classes from './admin-sidebar.module.css'
import Link from 'next/link'

const AdminSidebar = ({closed}) => {
    let attachedClasses = [classes.Sidebar, classes.CloseMobile];

    if (closed) {
        attachedClasses = [classes.Sidebar, classes.Close];
    }

    return (
        <aside className={attachedClasses.join(' ')}>
            <ul className={classes.SidebarList}>
                <li className={`${classes.SidebarListItem} ${classes.active} nav-item`}>
                    <Link href={`/`}>
                        <a className={`nav-link ${classes.NavLink}`}>
                            <i className="bi bi-grid"/>
                            <span>Dashboard</span>
                        </a>
                    </Link>
                </li>
                <li className={`${classes.SidebarListItem}  nav-item`}>
                    <Link href={`/`}>
                        <a className={`nav-link ${classes.NavLink}`}>
                            <i className="bi bi-graph-up"/>
                            <span>Analytics</span>
                        </a>
                    </Link>
                </li>
                <li className={classes.NavHeading}>Users</li>


                <li className={`${classes.SidebarListItem} ${classes.active} nav-item`}>
                    <Link href={`/`}>
                        <a className={`nav-link ${classes.NavLink}`}>
                            <i className="bi bi-grid"/>
                            <span>Dashboard</span>
                        </a>
                    </Link>
                </li>
                <li className={`${classes.SidebarListItem}  nav-item`}>
                    <Link href={`/`}>
                        <a className={`nav-link ${classes.NavLink}`}>
                            <i className="bi bi-graph-up"/>
                            <span>Analytics</span>
                        </a>
                    </Link>
                </li>
                <li className={classes.NavHeading}>Others</li>
                <li className={`${classes.SidebarListItem} ${classes.active} nav-item`}>
                    <Link href={`/`}>
                        <a className={`nav-link ${classes.NavLink}`}>
                            <i className="bi bi-grid"/>
                            <span>Dashboard</span>
                        </a>
                    </Link>
                </li>
                <li className={`${classes.SidebarListItem}  nav-item`}>
                    <Link href={`/`}>
                        <a className={`nav-link ${classes.NavLink}`}>
                            <i className="bi bi-graph-up"/>
                            <span>Analytics</span>
                        </a>
                    </Link>
                </li>
                <li className={classes.NavHeading}>Users</li>

                <li className={`${classes.SidebarListItem} ${classes.active} nav-item`}>
                    <Link href={`/`}>
                        <a className={`nav-link ${classes.NavLink}`}>
                            <i className="bi bi-grid"/>
                            <span>Dashboard</span>
                        </a>
                    </Link>
                </li>
                <li className={`${classes.SidebarListItem}  nav-item`}>
                    <Link href={`/`}>
                        <a className={`nav-link ${classes.NavLink}`}>
                            <i className="bi bi-graph-up"/>
                            <span>Analytics</span>
                        </a>
                    </Link>
                </li>
                <li className={classes.NavHeading}>Others</li>
                <li className={`${classes.SidebarListItem} ${classes.active} nav-item`}>
                    <Link href={`/`}>
                        <a className={`nav-link ${classes.NavLink}`}>
                            <i className="bi bi-grid"/>
                            <span>Dashboard</span>
                        </a>
                    </Link>
                </li>
                <li className={`${classes.SidebarListItem}  nav-item`}>
                    <Link href={`/`}>
                        <a className={`nav-link ${classes.NavLink}`}>
                            <i className="bi bi-graph-up"/>
                            <span>Analytics</span>
                        </a>
                    </Link>
                </li>
                <li className={classes.NavHeading}>Users</li>
            </ul>

        </aside>
    )
        ;
};

export default AdminSidebar;