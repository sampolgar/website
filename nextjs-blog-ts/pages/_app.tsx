import "../styles/global.css";
import { AppProps } from "next/app";

//destructuring Component and pageProps from props, they're both of type AppProps ??
//why are they type appprops??
// TODO look into this2
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
