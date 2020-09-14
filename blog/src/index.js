import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import "semantic-ui-css/semantic.min.css";
import App from "./components/App";
import reducers from "./reducers";
import thunk from "redux-thunk";

const store = createStore(reducers, applyMiddleware(thunk));
ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
