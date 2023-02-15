import Layout from "../components/layout";
import "../styles/globals.css";
import "../styles/general.sass";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps, session }) {
  return (
    <>
      <Layout>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </Layout>
    </>
  );
}

export default MyApp;
