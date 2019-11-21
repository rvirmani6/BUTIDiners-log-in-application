import React, { Component } from 'react';
import Text from './Text';
import validate from './validation';

class FormComponent extends Component {
  constructor () {
    this.state = {
        formIsValid: false,
        formControls: {
            phone: {
                value: '',
                placeholder: 'What is your phone number',
                valid: false,
                touched: false,
                validationRules: {
                    minLength: 10,
                    isRequired: true
                }
            },
            code: {
                value: '',
                placeholder: "Please enter your access code",
                valid: false,
                touched: false,
                validationRules: {
                    minLength: 6,
                    maxLength: 6,
                    isRequired: true
                    
                }
            }

        }
    }
  }
  
  changeHandler = event => {
      
    const name = event.target.name;
    const value = event.target.value;

    const updatedControls = {
        ...this.state.formControls
    };
    const updatedFormElement = {
        ...updatedControls[name]
    };
    updatedFormElement.value = value;
    updatedFormElement.touched = true;
    updatedFormElement.valid = validate(value, updatedFormElement.validationRules);
    
    updatedControls[name] = updatedFormElement;

    let formIsValid = true;
      for (let inputIdentifier in updatedControls) {
        formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
      }
  
    this.setState({
        formControls: updatedControls,
        formIsValid: formIsValid
    });
  
  }

  formSubmitHandler = () => {
    console.dir(this.state.formControls);
  }

  render () {
    return (
      <form>
          <Text name="phone" 
                placeholder={this.state.formControls.phone.placeholder} 
                value={this.state.formControls.phone.value} 
                onChange={this.changeHandler}
                touched={this.state.formControls.name.touched}
                valid={this.state.formControls.name.valid} 
          />
          <button onClick={this.formSubmitHandler}
                disabled={!this.state.formIsValid}
            > 
                Submit
          </button>
          <Text name="code"
                placeholder={this.state.formControls.code.placeholder}
                value={this.state.formControls.code.value}
                onChange={this.changeHandler}
                touched={this.state.formControls.code.touched}
                valid={this.state.formControls.code.valid}
          />
          <button onClick={this.formSubmitHandler}
                disabled={!this.state.formIsValid}
            > 
                Submit
          </button>
      </form>
    );        
  }
}

export default FormComponent;