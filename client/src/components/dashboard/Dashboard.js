import React, { Component } from 'react';
import Navbar from './navbar.component.js';
import Body from './body.component.js';
import Footer from './footer.component.js';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Dashboard extends Component{
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render(){
    const { user } = this.props.auth;

    return (
          <div>
            <Navbar />
            <Body />
            <div>
              <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-danger waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
            </div>
            <Footer />
          </div>
        );
      }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
