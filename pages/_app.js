import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import { wrapper, store } from "../store/store";
import { Provider } from "react-redux";

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Provider>
  );
}

export default MyApp;