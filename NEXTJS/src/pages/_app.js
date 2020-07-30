import App from "next/app";
import { useState } from "react";
import { wrapper } from "../redux/store/configureStore";
import { useStore } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

//import global styles here
//import "../styles/globalStyles/link.css";

function MyApp({ Component, pageProps }) {
  const store = useStore((state) => state);

  store.subscribe(() => {
    console.log(store.getState());
  });

  return (
    <PersistGate persistor={store.__persistor}>
      <Component {...pageProps} />
    </PersistGate>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  return {
    pageProps: {
      // Call page-level getInitialProps
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}),
      // Some custom thing for all pages
      appProp: ctx.pathname,
    },
  };
};

export default wrapper.withRedux(MyApp);
