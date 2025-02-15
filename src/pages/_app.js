import "swiper/css";
import "@/styles/globals.css";
import WalletContextProvider from "../context/walletProvider";

export default function App({ Component, pageProps }) {
  return (
    <WalletContextProvider>
      <Component {...pageProps} />;
    </WalletContextProvider>
  );
}
