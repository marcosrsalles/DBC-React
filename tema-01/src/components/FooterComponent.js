import Link from "./LinkComponent";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.nav}>
      <footer>
        <nav>
          <ul className="container ul-footer">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <address className="container">
          Tv. São José, 455 - Navegantes, Porto Alegre - RS, 90240-200
        </address>
      </footer>
    </div>
  );
};
export default Footer;
