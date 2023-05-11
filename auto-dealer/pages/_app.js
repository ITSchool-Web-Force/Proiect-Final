import "@/styles/globals.css";

import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          Welcome to the World of CG International | Supercar Dealer
        </title>
        <meta name="description" content="This is a description of my page" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
