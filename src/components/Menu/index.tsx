import { useState } from "react";
import Image from "next/image";
import styles from "./Menu.module.css";

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { root, logoSpan, navContainer, nav, menuContainer, menuItem, hr } =
    styles;
  return (
    <div id={root}>
      <div>
        <span id={logoSpan}>👶</span>
        💻
      </div>
      <div id={navContainer}>
        <Image
          src={"/icons/menu-burger.svg"}
          width={18}
          height={18}
          onClick={() => setShowMenu(!showMenu)}
        />
        {showMenu ? (
          <nav id={nav} onMouseLeave={() => setShowMenu(false)}>
            <ul id={menuContainer}>
              <li className={menuItem}>Home 🏠</li>
              <li className={menuItem}>Busca 🔍</li>
              <li className={menuItem}>Parceiros 🤝</li>
              <li className={menuItem}>Contato 📞</li>
              <hr id={hr} />
              <li className={menuItem}>Login</li>
            </ul>
          </nav>
        ) : null}
      </div>
    </div>
  );
};

export default Menu;
