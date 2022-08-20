import { useState } from "react";
import Image from "next/image";
import styles from "./Menu.module.css";

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div id={styles.root}>
      <div>👶💻</div>
      <div id={styles.navContainer}>
        <Image
          src={"/icons/menu-burger.svg"}
          width={18}
          height={18}
          onClick={() => setShowMenu(!showMenu)}
        />
        {showMenu ? (
          <nav id={styles.nav} onMouseLeave={() => setShowMenu(false)}>
            <ul id={styles.menuContainer}>
              <li className={styles.menuItem}>Home 🏠</li>
              <li className={styles.menuItem}>Busca 🔍</li>
              <li className={styles.menuItem}>Parceiros 🤝</li>
              <li className={styles.menuItem}>Contato 📞</li>
              <li className={styles.menuItem}>Login</li>
            </ul>
          </nav>
        ) : null}
      </div>
    </div>
  );
};

export default Menu;
