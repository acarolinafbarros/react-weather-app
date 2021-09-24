import React from "react";
import ReactDOM from "react-dom";

import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import reducers from "./redux/reducers";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";

import App from "./App";
import "./index.css";

// configure persist store
const reduxPersistConfig = {
  key: "root",
  storage: storage,
};

const reducer = persistReducer(reduxPersistConfig, reducers);
const store = createStore(reducer, applyMiddleware(thunk));
const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store} storePersistor={persistor}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
