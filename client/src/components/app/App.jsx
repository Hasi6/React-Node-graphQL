import React from "react";
import { withRouter, Route, Switch } from "react-router-dom";

// REDUX
import { Provider } from "react-redux";
import configureStore from "../../redux/store/configureStore";
import HomePage from "./HomePage/HomePage";

const store = configureStore;

const App = ({ location }) => {
  return (
    <Provider store={store}>
      <Switch key={location.key}>
        <Route path="/" exact component={HomePage} />
      </Switch>
    </Provider>
  );
};

export default withRouter(App);
