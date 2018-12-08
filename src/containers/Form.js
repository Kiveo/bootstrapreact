import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state= {
      firstName: '',
      lastName: '',
      email: '',
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (event.target.checkValidity() === false) {
      event.stopPropagation();
    }
    event.target.classList.add('was-validated');
  }
  
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  render() {
    return(
      <form className="needs-validation" noValidate onSubmit={this.handleSubmit}>
        <div className="form-row">
          {/* Each column of this row has a label, input, and tooltip validation */}
          <div className="col-md-4 mb-3">
            <label htmlFor="validationTooltip01">First name</label>
            <input type="text" className="form-control" id="validationTooltip01" placeholder="First name" name="firstName" onChange={this.handleChange} value={this.state.firstName} required />
            <div className="valid-tooltip">
              Looks good!
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="validationTooltip02">Last name</label>
            <input type="text" className="form-control" id="validationTooltip02" placeholder="Last name" name="lastName" onChange={this.handleChange} value={this.state.lastName} required />
            <div className="valid-tooltip">
              Looks good!
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="validationTooltipUsername">Email</label>
            <div className="input-group">
              <input type="email" className="form-control" id="validationTooltipUsername" placeholder="name@email.com" name="email" onChange={this.handleChange} value={this.state.email} aria-describedby="validationTooltipUsernamePrepend" required />
              <div className="invalid-tooltip">
                Please enter a unique and valid email.
              </div>
            </div>
          </div>
        </div>
        <div className="form-row">
          {/* Each column of this row has a label, input, and tooltip validation */}
          <div className="col-md-6 mb-3">
            <label htmlFor="validationTooltip03">City</label>
            <input type="text" className="form-control" id="validationTooltip03" placeholder="City" required />
            <div className="invalid-tooltip">
              Please provide a valid city.  
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="validationTooltip04">State</label>
            <input type="text" className="form-control" id="validationTooltip04" placeholder="State" required />
            <div className="invalid-tooltip">
              Please provide a valid state.
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="validationTooltip05">Zip</label>
            <input type="text" className="form-control" id="validationTooltip05" placeholder="Zip" required />
            <div className="invalid-tooltip">
              Please provide a valid zip.
            </div>
          </div>
        </div>
        <button className="btn btn-primary" type="submit">Submit form</button>
      </form>
    );
  }
}

export default Form;