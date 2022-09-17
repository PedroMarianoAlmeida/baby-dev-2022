import "src/styles/globals.scss";
import type { AppProps } from "next/app";
import Menu from "src/components/Menu";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div id="myapp-container">
      <Menu />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
