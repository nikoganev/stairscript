import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import 'react-bootstrap';


export default class Navbar extends Component {

  render() {
    return(
      <nav className="navbar navbar-dark p-0 container-fluid" style={{backgroundColor:"#808080"}}>



            <div className="col-2 text-center navbar-border-shadow">
              <Link to="/" className="navbar-brand m-auto">Filters</Link>
            </div>
            <div className="col-2 text-white text-center navbar-border-shadow">
              <p className="m-auto">Results</p>
            </div>
            <div className="col-6 text-white text-center navbar-border-shadow">
              <p className="m-auto">High level CRD</p>

            </div>
            <div className="col-2 text-white text-center navbar-border-shadow">
              <p className="m-auto">Properties</p>
            </div>


      </nav>
    );
  }
}
