import { NavLink } from "react-router-dom";
import styles from "./Header.module.css"

const Header = () => {
 
  return (
    <div className={styles.header}>

      <li>
        <NavLink exact to="/" activeClassName={styles.activeLinkLogo}>
          <img className={styles.logo} src="/eindlogo.jpg" alt="Logo"/>
        </NavLink>
      </li>

      <input type="checkbox" id={styles.nav_toggle} className={styles.nav_toggle} />
      <nav>
        <ul className={styles.menu}>
          <li><NavLink exact to="/" activeClassName={styles.activeLink}>Home</NavLink></li>
          <li><NavLink exact to="/about" activeClassName={styles.activeLink}>About</NavLink></li>
          <li><NavLink exact to="/cocktail" activeClassName={styles.activeLink}>Cocktails</NavLink></li>
          <li><NavLink exact to="/category" activeClassName={styles.activeLink}>Category</NavLink></li>
          <li><NavLink exact to="/Favorites" activeClassName={styles.activeLink}>Favorites</NavLink></li>
          <li><NavLink exact to="/contact" activeClassName={styles.activeLink}>Contact</NavLink></li>
        </ul>
      </nav>
      <label htmlFor={styles.nav_toggle} className={styles.nav_toggle_label}>
        <span></span>
      </label>
    </div>
  );
}

export default Header;