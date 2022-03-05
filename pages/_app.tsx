import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Home/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="h-screen flex flex-col">
      <nav>
        <Navbar />
      </nav>
      <main className="flex-1">
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
