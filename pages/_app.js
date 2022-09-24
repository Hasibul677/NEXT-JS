import { Fragment } from "react";
import "../styles/globals.css";
import Nav from "./nav/nav";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Nav />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
