import Link from "next/link";
import styles from "./Menu.module.css";

const Logo = () => {
  const { logoContainer, logoSpan } = styles;
  return (
    <Link href="./">
      <div id={logoContainer}>
        <span id={logoSpan}>👶</span>
        💻
      </div>
    </Link>
  );
};

export default Logo;
