import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light">
                    <a className="navbar-brand" href="/">
                        DMS
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarCollapse"
                        aria-controls="navbarCollapse"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarCollapse"
                    >
                        <ul className="navbar-nav mr-auto">
                            {this.props.auth.accessToken !== null && (
                                <React.Fragment>
                                    <li className="nav-item active">
                                        <NavLink
                                            className="nav-link"
                                            to="/home"
                                        >
                                            Home
                                            <span className="sr-only">
                                                (current)
                                            </span>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            className="nav-link"
                                            to="/otherpage"
                                        >
                                            Link
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link disabled"
                                            href="/"
                                            tabIndex="-1"
                                            aria-disabled="true"
                                        >
                                            Disabled
                                        </a>
                                    </li>
                                </React.Fragment>
                            )}
                        </ul>

                        <form className="form-inline mt-2 mt-md-0">
                            <input
                                className="form-control mr-sm-2"
                                type="text"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button
                                className="btn btn-outline-primary my-2 my-sm-0"
                                type="submit"
                            >
                                Search
                            </button>
                        </form>
                    </div>
                </nav>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    };
};
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
