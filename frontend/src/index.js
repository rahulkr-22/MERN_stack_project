import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
//"proxy": "https://ecombackend-v3lb.onrender.com"
// https://cra.link/deployment
//"start": "react-scripts --openssl-legacy-provider start",
//"start": "react-scripts",
// "build": "react-scripts build",
//"proxy": "http://192.168.137.1:4000"
import { positions, transitions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE,
};

ReactDOM.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  </Provider>,
  document.getElementById("root")
);
