import logo from "../img/logo.png";
import styles from "./Logo.module.css";

const Logo = ({ texto }) => {
  return (
    <div className={styles.logoContaint}>
      <img className={styles.logo} src={logo} alt="logo" />
      <small> {texto}</small>
    </div>
  );
};

export default Logo;
