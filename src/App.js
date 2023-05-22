import React from "react";
import { Provider } from "react-redux";
import { AppRoutes } from "./AppRoutes/AppRoutes";
import { store } from "./store";

const App = () => (
  <Provider store={store}>
    <AppRoutes />
  </Provider>
);

export default App;
