import React from "react";
import ReactDOM from "react-dom/client";
import Post from "./redux-toolkit/Post";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { store } from "../src/redux-toolkit/store";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Post />
  </Provider>
);
