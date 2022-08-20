import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Menu.module.css";

import useDebounce from "./../../hooks/useDebounce";

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isMouseLeavesMenu, setIsMouseLeavesMenu] = useState(false);

  const debouncedIsMouseLeavesMenu = useDebounce(isMouseLeavesMenu, 350);

  useEffect(() => {
    if (debouncedIsMouseLeavesMenu) {
      setShowMenu(false);
      setIsMouseLeavesMenu(false);
    }
  }, [debouncedIsMouseLeavesMenu]);

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
          <nav
            id={nav}
            onMouseLeave={() => setIsMouseLeavesMenu(true)}
            onMouseEnter={() => setIsMouseLeavesMenu(false)}
          >
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
