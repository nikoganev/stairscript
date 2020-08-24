import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import '../../App.css';
import axios from 'axios';

class Popup extends React.Component {
  constructor(props){
    super(props);

    // this.onSubmit = this.onSubmit.bind(this);
    this.onChangeCampaignName = this.onChangeCampaignName.bind(this);
    this.onChangeOperationalUnit = this.onChangeOperationalUnit.bind(this);
    this.onChangeTherapeuticArea = this.onChangeTherapeuticArea.bind(this);
    this.onChangeProduct = this.onChangeProduct.bind(this);

    this.onSimpleFormSubmit = this.onSimpleFormSubmit.bind(this);

    this.state = {

      campaignName: '',
      operationalUnit: '',
      therapeuticArea: '',
      product: ''
    }
  }

  onChangeCampaignName(e) {
    this.setState({
      campaignName: e.target.value
    })
  }
  onChangeOperationalUnit(e) {
    this.setState({
      operationalUnit: e.target.value
    })
  }
  onChangeTherapeuticArea(e) {
    this.setState({
      therapeuticArea: e.target.value
    })
  }
  onChangeProduct(e) {
    this.setState({
      product: e.target.value
    })
  }

   onSimpleFormSubmit(e) {
     e.preventDefault();

     const modalForm = {
      campaignName: this.state.campaignName,
      operationalUnit: this.state.operationalUnit,
      therapeuticArea: this.state.therapeuticArea,
      product: this.state.product
    }

    console.log(modalForm);

    axios.post('http://localhost:5000/requests/add', modalForm)
    .then(response => {
    console.log(response)
    })
    .catch(error => {
      console.log(error.response)
    });

    window.location.href = ('/dashboard');
   }

  render() {
    return (

      <div className="popup">
        <div className="popup_inner m-auto w-50">
          <h4 className="">{this.props.text}</h4>
          <p className="mb-0 mt-2">{this.props.p1}</p>
          <p className="mb-3 mt-0">{this.props.p2}</p>
          <form onSubmit={this.onSimpleFormSubmit}>

            <div className="text-left">
              <input type="text"
                  className="col-11 my-3 border-left-0 border-right-0 border-top-0"
                  placeholder="Campaign Name*"
                  required
                  value={this.state.campaignName}
                  onChange={this.onChangeCampaignName}
              />
              <input type="text"
                  className="col-11 my-3 border-left-0 border-right-0 border-top-0"
                  placeholder="Operational Unit*"
                  required
                  value={this.state.operationalUnit}
                  onChange={this.onChangeOperationalUnit}
               />
              <select className="col-11 my-3 border-left-0 border-right-0 border-top-0"
              required
              value={this.state.therapeuticArea}
              onChange={this.onChangeTherapeuticArea}
              >
                <option value="" placeholder="Therapeutic Area">Therapeutic Area</option>
                <option value="respiratory">Respiratory</option>
                <option value="pulmonary">Pulmonary</option>
              </select>
              <select className="col-11 my-3 border-left-0 border-right-0 border-top-0"
              required
              value={this.state.product}
              onChange={this.onChangeProduct}
              >
                <option value="" placeholder="Product/Brand*">Product/Brand</option>
                <option value="pradaxa">Pradaxa</option>
                <option value="spiolto">Spiolto</option>
              </select>
            </div>
            <div className="row my-4">
              <div className="col-4">&nbsp;</div>
              <div className="col-4 p-0">
                <button onClick={this.props.closePopup} className="btn text-uppercase">Cancel</button>
              </div>
              <div className="col-4 p-0">
                  <input
                    type="submit"
                    className="btn btn-primary text-uppercase"

                    color="primary"
                    value="Create Material"
                  />
              </div>
            </div>

          </form>
        </div>
      </div>

    )
  }
}

export default class Footer extends Component {
  constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render() {
    return(

        <div className="container-fluid" style={{position: "absolute", bottom: "5px"}}>
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-6">&nbsp;</div>
                <div className="col-6 text-right">
                  <button style={{border:"none",outline:"none",backgroundColor:"transparent"}} onClick={this.togglePopup.bind(this)}><img src={require('../../images/add-icon.png')} style={{width:"60px", margin:"0px", padding:"0px"}} alt="New Request" /></button>
                  {this.state.showPopup ?
                    <Popup
                      text="Request Material"
                      p1="You are about to add new Material"
                      p2="Please fill in required information to continue to material type selection"
                      closePopup={this.togglePopup.bind(this)}

                    />
                    : null
                  }
                </div>
              </div>
            </div>
          </div>
        </div>


    );
  }
}
