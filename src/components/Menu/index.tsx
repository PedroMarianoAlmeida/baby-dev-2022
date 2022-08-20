import Image from "next/image";

const Menu = () => {
  return (
    <div>
      <div>👶💻</div>
      <Image src={"/icons/menu-burger.svg"} width={18} height={18} />
      <nav>
        <ul>
          <li>Home 🏠</li>
          <li>Busca 🔍</li>
          <li>Parceiros 🤝</li>
          <li>Contato 📞</li>
          <li>Login</li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
