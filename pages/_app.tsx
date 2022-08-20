import "../styles/globals.css";
import type { AppProps } from "next/app";
import Menu from "../src/components/Menu";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Menu />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
