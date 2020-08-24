import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import '../../App.css';
import axios from 'axios';

const Request = props => (
  <table>
  <tbody>
    <tr>
      <td><Link to={"/edit/"+props.request._id}>{props.request.campaignName}</Link></td>
      <a href="#" onClick={() => { props.deleteRequest(props.request._id) }}>Delete</a>
    </tr>
    <tr style={{fontSize:"12px"}}>
      <td>{props.request.operationalUnit}</td>
    </tr>
  </tbody>
  </table>

)

export default class Body extends Component {
  constructor(props) {
    super(props);

    this.deleteRequest=this.deleteRequest.bind(this);

    this.state = {
      requests: []
    };
  }


  componentDidMount() {
    axios.get('http://localhost:5000/requests')
      .then(response => {
        this.setState({requests: response.data})
      })
      .catch((error) => {
        console.log(error);
      })
    }

    deleteRequest(id) {
      axios.delete('http://localhost:5000/requests/'+id)
        .then(response => { console.log(response.data)});

      this.setState({
        requests: this.state.requests.filter(el => el._id !== id)
      })
    }

    requestList() {
    return this.state.requests.map(currentrequest => {
      return <Request request={currentrequest} deleteRequest={this.deleteRequest} key={currentrequest._id}/>;
    })
  }



  render() {
    return(
      <div className="container-fluid" style={{backgroundColor:"#eeeeee"}}>
        <div className="row">
          <table className="col-12 text-center">
            <tbody>
            <tr>
              <td colSpan="2">
                <table>
                <tbody>
                  <tr className="m-auto" style={{wordWrap:"break-word"}}>
                    <td>
                      <input type="text"
                          name="Campaign Name"
                          className="col-8"
                          placeholder="Campaign name"
                      />
                    </td>
                  </tr>

                  <tr className="m-auto" style={{wordWrap:"break-word"}}>
                    <td>
                      <select name="OPU/ROPU" id="opu-ropu">
                        <option placeholder="OPU/ROPU">OPU/ROPU</option>
                        <option value="france">France</option>
                        <option value="spain">Spain</option>
                      </select>
                    </td>
                  </tr>

                  <tr className="m-auto" style={{wordWrap:"break-word"}}>
                    <td>
                      <select name="Therapeutic Area" id="therapeutic-area">
                        <option value="" placeholder="Therapeutic Area">Therapeutic Area</option>
                        <option value="france">Respiratory</option>
                        <option value="spain">Pulmonary</option>
                      </select>
                    </td>
                  </tr>
              </tbody>
              </table>
              </td>
              <td colSpan="2">
                <table>
                <tbody>
                  <tr>
                    <td>{ this.requestList() }</td>
                  </tr>
                </tbody>
                </table>
              </td>
              <td colSpan="6">


                <table>
                <tbody>
                    <tr className="m-auto" style={{wordWrap:"break-word"}}>
                      <td>
                        <label><b>Campaign:</b>&nbsp;</label>
                        <div>Pulmonary disease</div>
                      </td>
                    </tr>
                    <tr className="m-auto" style={{wordWrap:"break-word"}}>
                      <td>
                        <label><b>Local Campaign Owner:</b>&nbsp;</label>
                        <input type="text" value="niko.venag@gmail.com" disabled className="border-left-0 border-right-0 border-top-0 mb-2" />
                      </td>
                    </tr>
                    <tr>
                      <td>

                      </td>
                    </tr>

                </tbody>
                </table>



              </td>
              <td colSpan="2">
                <table>
                <tbody>
                  <tr className="m-auto" style={{wordWrap:"break-word"}}>
                    <td>
                      <label><b>Local Campaign Owner</b><sup>*</sup></label><br />
                      <input type="text" value="niko.venag@gmail.com" disabled className="border-left-0 border-right-0 border-top-0 mb-2" />
                    </td>
                  </tr>
                </tbody>
                </table>
              </td>
            </tr>
          </tbody>
          </table>


        </div>
      </div>
    );
  }
}
