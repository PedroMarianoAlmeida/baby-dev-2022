import styles from "./Menu.module.css";

const Login = () => {
  return <LoginUI isLogged={false} />;
};

const LoginUI = ({ isLogged }) => {
  const { menuItem, notLogged } = styles;
  return (
    <li className={menuItem}>
      {isLogged ? <></> : <div id={notLogged}>Login</div>}
    </li>
  );
};

export default Login;
