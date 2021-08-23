import React, { Component } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import './sign-in.styles.scss';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e);
    this.setState({ [name]: value });
  };

  //   handleSubmit = () => {};

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form>
          <FormInput
            handleChange={this.handleChange}
            type='email'
            name='email'
            id='email'
            label='email'
            required
          />
          <FormInput
            handleChange={this.handleChange}
            type='password'
            name='password'
            id='password'
            label='password'
          />
          <CustomButton>Sign In</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
