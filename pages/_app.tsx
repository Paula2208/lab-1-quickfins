import Dashboard from "../components/Dashboard";
import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Dashboard>
      <Component {...pageProps} />
    </Dashboard>
  );
}

export default MyApp;