import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import Navbar from '../Front/navbar.component.js';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

    return (
      <>
      <Navbar />
      <div className="col-12" style={{backgroundColor: "#89cff0", height:"100vh"}}>
        <div style={{ paddingTop: "4rem" }} className="row">
          <div className="col-md-6 m-auto pt-4" style={{backgroundColor: "#fff", boxShadow:"0px 0px 5px #000"}}>

            <div className="col-12 text-center">
              <h4>
                <b>Login</b> below
              </h4>

            </div>
            <form noValidate className="py-4" onSubmit={this.onSubmit}>
              <div className="input-field col-10 mx-auto my-1">
                <label htmlFor="email">Email</label>
                <br />
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("col-12", {
                    invalid: errors.email || errors.emailnotfound
                  })}
                />

                <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
              </div>
              <div className="input-field col-10 mx-auto my-1">
                <label htmlFor="password">Password</label>
                <br />
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("col-12", {
                    invalid: errors.password || errors.passwordincorrect
                  })}
                />

                <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
              </div>
              <div className="col-12 text-center">
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-primary waves-effect waves-light hoverable blue accent-3"
                >
                  Login
                </button>
              </div>
              <div className="col-10 mx-auto mt-4">
                <p className="grey-text text-darken-1" style={{fontSize:"0.75rem"}}>
                  Don't have an account? <Link to="/register">Register</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      </>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
