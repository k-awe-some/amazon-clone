import { AppProps } from "next/app";
import { Provider as AuthProvider } from "next-auth/client";
import { Provider } from "react-redux";

import { store } from "../store";

import "../styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthProvider session={pageProps.session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </AuthProvider>
  );
};

export default App;
