import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import configureStore from "./redux/store/configureStore";
import "./index.css";

const store = configureStore();

//log the store
store.subscribe(() => {
  console.log(store.getState());
});

//handle page reloads
//call actions here to pre populate redux store with data

// EX: store.dispatch(startGetUser());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
