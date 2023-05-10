import { type AppType } from "next/app";
import { SessionProvider } from "next-auth/react"
import { store } from 'src/store'
import { Provider } from 'react-redux'

import "~/styles/globals.css";
import { Layout } from "../components";

// @ts-ignore
const MyApp: AppType = ({ Component, pageProps: { session, ...pageProps } }) => (
  <SessionProvider session={session}>
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  </SessionProvider>
  
);

export default MyApp;
