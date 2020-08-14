import React, { Component } from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import Header from "./components/Header";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/app/Home";
import OtherPage from "./pages/app/OtherPage";
import { connect } from "react-redux";

class App extends Component {
    render() {
        return (
            <Router>
                {this.props.auth.accessToken === null ? (
                    <Redirect to="/login" />
                ) : (
                    <Redirect to="/home" />
                )}

                <Header />

                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />

                    <Route path="/home" component={Home} />
                    <Route path="/otherpage" component={OtherPage} />
                </Switch>
            </Router>
        );
    }
}

export default connect((state) => {
    return {
        auth: state.auth,
    };
}, null)(App);
