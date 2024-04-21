import "../styles/globals.css";
import Layout from "../components/layout";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://www.paypal.com/sdk/js?client-id=BAAB0RxJy8wOrUVdVRhgq0kxscwwN2egTwZTi6H8o8w98LEzaY13KaWGDp_ZPr2XmqGQcRZbgzunwG8gFs&components=hosted-buttons&disable-funding=venmo&currency=USD"
        crossorigin="anonymous"
      ></Script>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
