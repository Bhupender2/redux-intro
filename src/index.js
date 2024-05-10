import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux"; //to connect react with redux we use provider component

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* we wrap provider component to the whole App and pass store as a props just like context API  and now all the component inside provider can read the data from the store and dispatch action to it*/}
      <App />
    </Provider>
  </React.StrictMode>
);
