import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";
import logo from '../assets/iCare.png'

import './Login.css';

class SignUp extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .email()
      .label("Username"),
    password: Joi.string()
      .required()
      .min(7)
      .label("Password"),
    name: Joi.string()
      .required()
      .label("Name")
  };

  doSubmit = () => {
    // Call the server
    console.log("Submitted");
  };

  render() {
    return (
      <div className="login">
        <img className="logo" src={logo} />
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit} className="children">
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default SignUp;
