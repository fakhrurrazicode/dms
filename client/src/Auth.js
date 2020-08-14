import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

function Auth() {
    return (
        <React.Fragment>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </Switch>
        </React.Fragment>
    );
}

export default Auth;
