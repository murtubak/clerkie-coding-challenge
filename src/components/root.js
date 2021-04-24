import React, { useEffect } from "react"
import { Switch, Route, BrowserRouter as Router, useLocation, withRouter } from "react-router-dom"
import App from "../App";
import Login from "./login";

const Root = () => (
  <Switch>
    <Router>
        <Route path="/" exact component={App} />
        <Route path="/login" component={Login} />
    </Router>
  </Switch>
)
export default Root