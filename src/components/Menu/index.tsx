import Image from "next/image";
import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <div id={styles.root}>
      <div>👶💻</div>
      <div>
        <Image src={"/icons/menu-burger.svg"} width={18} height={18} />
        <nav>
          <ul id={styles.menuContainer}>
            <li className={styles.menuItem}>Home 🏠</li>
            <li className={styles.menuItem}>Busca 🔍</li>
            <li className={styles.menuItem}>Parceiros 🤝</li>
            <li className={styles.menuItem}>Contato 📞</li>
            <li className={styles.menuItem}>Login</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
