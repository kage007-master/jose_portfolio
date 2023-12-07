import "../styles/globals.css";
import { useState } from "react";
import type { AppProps } from "next/app";
import Script from "next/script";
import { PortfolioContext } from "./context";

function MyApp({ Component, pageProps }: AppProps) {
  const [workId, setWorkId] = useState<string | null>(null);
  const [menuId, setMenuId] = useState<number>(1);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <PortfolioContext.Provider
      value={{
        workId,
        menuId,
        showMenu,
        setWorkId,
        setMenuId,
        setShowMenu,
      }}
    >
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-KJF12P63GL"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-KJF12P63GL');
        `}
      </Script>

      <Component {...pageProps} />
    </PortfolioContext.Provider>
  );
}

export default MyApp;
