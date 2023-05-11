import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Theme from "./theme";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const client = new ApolloClient({
  uri: `${process.env.REACT_APP_BACKEND_GRAPHQL}`,
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ApolloProvider client={client}>
    <Theme>
      <Router>
        <App />
      </Router>
    </Theme>
  </ApolloProvider>
);
