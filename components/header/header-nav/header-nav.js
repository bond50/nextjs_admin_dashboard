import classes from './header-nav.module.css'
import Image from "next/image";

const HeaderNav = () => {
    return (
        <div className={`${classes.HeaderNav} `}>
            <div className={classes.IconContainer}>
                <i className={`bi bi-bell ${classes.Icon}`}/>
                <span className={`badge bg-primary ${classes.Badge}`}>4</span>
            </div>

            <div className={classes.IconContainer}>
                <i className={`bi bi-chat-left-text ${classes.Icon}`}/>
                <span className={`badge bg-success ${classes.Badge}`}>3</span>
            </div>

            <div className={`${classes.Profile}`}>
                <Image
                    src="/avatar/male.jpg"
                    width={40}
                    height={40}
                    className={`rounded-circle `}
                />
                <span className="d-none d-md-block dropdown-toggle ps-2">K. Anderson</span>
            </div>
        </div>
    );
};

export default HeaderNav;