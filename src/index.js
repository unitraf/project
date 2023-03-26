import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";
import "./css/grid.css";
import "./css/index.css";
document.title = "Unitraf ERP";


// console.log('====================================');
// console.log(store.getState());
// console.log('====================================');


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
