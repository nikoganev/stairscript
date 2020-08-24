import React, { Component } from 'react';
import NavFront from './navbar.component.js';
import BodyFront from './body.component.js';
import FooterFront from './footer.component.js';

export default class Homepage extends Component{
  render(){
        return (
          <div>
            <NavFront />
            <BodyFront />
            <FooterFront />
          </div>
        );
      }
}
