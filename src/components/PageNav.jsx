import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";

export default function PageNav() {
  return (
    <nav className={`${styles.nav} flex items-center justify-center ` } >
        <Logo />
      <ul className="flex gap-2 md:flex-row md:gap-16  flex-col">
        <li>
          <NavLink to="/pricing"> Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product"> Product</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styles.ctaLink}> Login</NavLink>
        </li>
      </ul>
    </nav>
  );
}
