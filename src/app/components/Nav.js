import styles from "@/app/styles/navbar.module.css";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className={styles.navbar}>
      <div>
        <ul className={styles.navbarList}>
          <li className={styles.navbarItem}>
            <Link className={styles.navbarLink} href="/">
              Home
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link className={styles.navbarLink} href="/">
              About
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link className={styles.navbarLink} href="/">
              Contact
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link className={styles.navbarLink} href="/">
              Movie
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
