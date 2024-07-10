import styles from "./Logo.module.css";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <img
        width="217px"
        height="52px"
        src="/logo.png"
        alt="WorldWise logo"
        className={styles.logo}
      />
    </Link>
  );
}

export default Logo;
