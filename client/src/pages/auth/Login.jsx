import React, { Component } from "react";
import { connect } from "react-redux";
import { setAccessToken, setLoading, login } from "../../redux/actions";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            errors: null,
        };
    }

    handleLogin = (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        this.props.login(email, password);
    };
    render() {
        const { email, password } = this.state;

        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-5">
                        <div className="card">
                            <div className="card-body">
                                <h3>Login</h3>
                                <hr />

                                <form onSubmit={this.handleLogin}>
                                    <div className="form-group">
                                        <label htmlFor="email">
                                            Email address
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            value={email}
                                            onChange={(e) =>
                                                this.setState({
                                                    email: e.target.value,
                                                })
                                            }
                                        />
                                    </div>

                                    {/* {errors && errors.} */}
                                    <div className="form-group">
                                        <label htmlFor="password">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            value={password}
                                            onChange={(e) =>
                                                this.setState({
                                                    password: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                    <div className="form-group form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="exampleCheck1"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="exampleCheck1"
                                        >
                                            Check me out
                                        </label>
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        {this.props.auth.isLoading && (
                                            <span
                                                className="spinner-border spinner-border-sm mr-2"
                                                role="status"
                                                aria-hidden="true"
                                            ></span>
                                        )}
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    };
};
const mapDispatchToProps = {
    setAccessToken,
    setLoading,
    login,
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
