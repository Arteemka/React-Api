import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";


import "./index.css";
import store  from './store/configureStore';
import MainFormContainer from "./containers/MainForm.container";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={store}>
    <MainFormContainer />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
