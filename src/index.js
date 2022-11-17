import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Theme } from "./contexts/ThemeContext";

const client = new ApolloClient({
  uri: `${process.env.REACT_APP_BACKEND_GRAPHQL}`,
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <ApolloProvider client={client}>
        <Theme>
          <App />
        </Theme>
      </ApolloProvider>
    </Router>
  </React.StrictMode>
);
