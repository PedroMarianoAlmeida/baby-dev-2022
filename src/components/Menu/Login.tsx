import Image from "next/image";
import styles from "./Menu.module.css";

const Login = () => {
  return (
    <LoginUI
      isLogged={true}
      userData={{
        name: "Sarah",
        image: "/sample/login-avatar.png",
      }}
    />
  );
};

const LoginUI = ({ isLogged, userData }) => {
  const { name, image } = userData;
  const { menuItem, notLogged } = styles;
  return (
    <li className={menuItem}>
      {isLogged ? (
        <div>
          <div>Oi, {name}</div>
          <p>Log out</p>
          <Image src={image} width={22} height={22} />
        </div>
      ) : (
        <div id={notLogged}>Login</div>
      )}
    </li>
  );
};

export default Login;
