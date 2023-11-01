import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { NavLink } from "react-router-dom"
import styles from './Header.module.css'

const Header = () => {
    const [toggled, setToggled] = useState(false);

    const toggelNavbar = () => {
        setToggled(!toggled)
    }

    const handleClick = () => {
        window.scrollTo({ top: 0 });
    }

    return (
        <header>
            <nav className={toggled ? styles.responsive_nav : ""} >
                <li>
                    <NavLink exact to="/" activeClassName={styles.activeLinkLogo}>
                        <img className={styles.logo} src="/eindlogo.jpg" alt="Logo" />
                    </NavLink>
                </li>
                <ul className={styles.menu}>
                    <li><NavLink exact to="/" activeClassName={styles.activeLink} className={styles.navLink} onClick={() => { handleClick(); setToggled(false) }}>Home</NavLink></li>
                    <li><NavLink exact to="/about" activeClassName={styles.activeLink} className={styles.navLink} onClick={() => { handleClick(); setToggled(false) }}>About</NavLink></li>
                    <li><NavLink exact to="/cocktail" activeClassName={styles.activeLink} className={styles.navLink} onClick={() => { handleClick(); setToggled(false) }}>Cocktails</NavLink></li>
                    <li><NavLink exact to="/category" activeClassName={styles.activeLink} className={styles.navLink} onClick={() => { handleClick(); setToggled(false) }}>Category</NavLink></li>
                    <li><NavLink exact to="/Favorites" activeClassName={styles.activeLink} className={styles.navLink} onClick={() => { handleClick(); setToggled(false) }}>Favorites</NavLink></li>
                    <li><NavLink exact to="/contact" activeClassName={styles.activeLink} className={styles.navLink} onClick={() => { handleClick(); setToggled(false) }}>Contact</NavLink></li>
                </ul>
                <div className={toggled === true ? `${styles.nav_btn}` : `${styles.nav_close_btn}`} onClick={toggelNavbar}>
                    <FaTimes className={styles.faTimes} />
                </div>
            </nav>
            <div className={toggled !== true ? `${styles.nav_btn}` : `${styles.nav_close_btn}`} onClick={toggelNavbar}>
                <FaBars className={styles.faBars} />
            </div>
        </header>
    )
}

export default Header
