import React, { Component } from "react";

export default class PassRevise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      new_password: "",
    };
  }

  render() {
    return (
      <div>
        <div className="container-fluid form-wm">
          <h4 className="border-bottom" style={{ marginBottom: 30 }}>
            修改密碼
          </h4>

          <div className="form-group form-row">
            <label className="col-lg-4">新密碼:</label>
            <input
              type="password"
              className="form-control"
              value={this.state.password}
              onChange={(event) => {
                this.setState({ password: event.target.value });
              }}
            ></input>

            <label className="col-lg-4" style={{ marginTop: 30 }}>
              確認新密碼:
            </label>
            <input
              type="password"
              className="form-control"
              value={this.state.new_password}
              onChange={(event) => {
                this.setState({ new_password: event.target.value });
              }}
            ></input>

            <div className="text-center">
              <button
                className="btn btn-primary"
                style={{
                  marginTop: "20px",
                  width: "150px",
                  height: "40px",
                  fontSize: "16px",
                }}
                onClick={this.onRegiClick}
              >
                完成修改
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
