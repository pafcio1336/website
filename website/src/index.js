import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./components/Projects/ShoppingCart/redux/store";
import App from "./App";
import "./index.scss";
import ReactModal from "react-modal";

const root = ReactDOM.createRoot(document.getElementById("root"));
ReactModal.setAppElement("#root");
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
