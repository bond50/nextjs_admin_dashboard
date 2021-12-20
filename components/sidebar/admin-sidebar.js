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
                <li className={classes.NavHeading}>Dashboard</li>

                <li className={`${classes.SidebarListItem}  nav-item`}>
                    <Link href={`/`}>
                        <a className={`nav-link ${classes.NavLink} ${classes.active}`}>
                            <i className="bi bi-grid"/>
                            <span>Home</span>
                        </a>
                    </Link>
                </li>

                <li className={`${classes.SidebarListItem}  nav-item`}>
                    <Link href={`/analytics`}>
                        <a className={`nav-link ${classes.NavLink}`}>
                            <i className="bi bi-graph-up"/>
                            <span>Analytics</span>
                        </a>
                    </Link>
                </li>
                <li className={classes.NavHeading}>Quick Links</li>
                <li className={`${classes.SidebarListItem} ${classes.active} nav-item`}>
                    <Link href={`/users`}>
                        <a className={`nav-link ${classes.NavLink}`}>
                            <i className="bi bi-person"/>
                            <span>Users</span>
                        </a>
                    </Link>
                </li>
                <li className={`${classes.SidebarListItem}  nav-item`}>
                    <Link href={`/`}>
                        <a className={`nav-link ${classes.NavLink}`}>
                            <i className="bi bi-paragraph"/>
                            <span>Blogs</span>
                        </a>
                    </Link>
                </li>
                 <li className={`${classes.SidebarListItem}  nav-item`}>
                    <Link href={`/`}>
                        <a className={`nav-link ${classes.NavLink}`}>
                            <i className="bi bi-bar-chart"/>
                            <span>Reports</span>
                        </a>
                    </Link>
                </li>

                <li className={classes.NavHeading}>Notifications</li>
                <li className={`${classes.SidebarListItem} ${classes.active} nav-item`}>
                    <Link href={`/`}>
                        <a className={`nav-link ${classes.NavLink}`}>
                            <i className="bi bi-grid"/>
                            <span>Mail</span>
                        </a>
                    </Link>
                </li>
                <li className={`${classes.SidebarListItem}  nav-item`}>
                    <Link href={`/`}>
                        <a className={`nav-link ${classes.NavLink}`}>
                            <i className="bi bi-chat-dots"/>
                            <span>Messages</span>
                        </a>
                    </Link>
                </li>
                <li className={`${classes.SidebarListItem}  nav-item`}>
                    <Link href={`/`}>
                        <a className={`nav-link ${classes.NavLink}`}>
                            <i className="bi bi-reply"/>
                            <span>Feedback</span>
                        </a>
                    </Link>
                </li>
                <li className={classes.NavHeading}>Staff</li>
                  <li className={`${classes.SidebarListItem}  nav-item`}>
                    <Link href={`/`}>
                        <a className={`nav-link ${classes.NavLink}`}>
                            <i className="bi bi-briefcase"/>
                            <span>Manage</span>
                        </a>
                    </Link>
                </li>
            </ul>
        </aside>
    );
};

export default AdminSidebar;