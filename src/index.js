import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// Router
import { BrowserRouter as Router } from "react-router-dom";
//
//
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./service/reducer/index";
//
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// It helps you retrieve the current state of your Redux store
// console.log("store",store.getState());
ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Provider store={store}>
      <App />
    </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
