import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "./App.scss";
import * as serviceWorker from "./serviceWorker";
import { Provider, connect } from "react-redux";

import store from "./redux/store";
import App from "./App";

console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();