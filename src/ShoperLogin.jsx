import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ShoperLogin extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", message: "" };
  }
  render() {
    return (
      <div className="container-fluid form-wm">
        <h4 className="border-bottom" style={{ marginBottom: 30 }}>
          商家登入
        </h4>

        <div className="form-group form-row">
          <label className="col-lg-4">Email</label>
          <input
            type="text"
            className="form-control"
            value={this.state.email}
            onChange={(event) => {
              this.setState({ email: event.target.value });
            }}
          ></input>
        </div>

        <div className="form-group form-row">
          <label className="col-lg-4" style={{ marginTop: 30 }}>
            密碼
          </label>
          <input
            type="password"
            className="form-control"
            value={this.state.password}
            onChange={(event) => {
              this.setState({ password: event.target.value });
            }}
          ></input>
        </div>

        <div style={{ marginTop: "15px" }}>
          <p>
            <Link to="/login/shoperlogin/shoperregister" className="m-2">
              商家註冊
            </Link>
            <span> | </span>
            <Link to="/login/forgotpass" className="m-2">
              忘記密碼
            </Link>
          </p>
        </div>

        <div className="text-end">
          {this.state.message}
          <button className="btn btn-primary" onClick={this.onLoginClick}>
            登入
          </button>
        </div>
      </div>
    );
  }
  onLoginClick = async () => {
    console.log(this.state);

    var response = await fetch(
      `http://localhost:5000/users?email=${this.state.email}&password=${this.state.password}`,
      { method: "GET" }
    );

    var body = await response.json();
    if (body.length > 0) {
      //success
      this.setState({
        message: <span className="text-success">Successfully Logged-in</span>,
      });
    } else {
      //error
      this.setState({
        message: (
          <span className="text-danger">Invalid login, please try again</span>
        ),
      });
    }
  };
}
