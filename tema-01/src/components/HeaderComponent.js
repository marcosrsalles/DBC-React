import Logo from "./LogoComponent";
import Link from "./LinkComponent";
import styles from "./Header.module.css";
import PageSobre from "./PageSobre";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContaint}>
        <div className="container">
          <h1 className={styles.logoHeader}>
            <Logo texto="Melhores alunos do vem ser de todos tempos" />{" "}
            <nav>
              <ul className={styles.ulHeader}>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="<PageSobre/>">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
