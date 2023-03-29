import React, { Component } from "react";

export default class ForgotPass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
  }

  render() {
    return (
      <div>
        <div className="container-fluid form-wm">
          <h4 className="border-bottom" style={{ marginBottom: 30 }}>
            忘記密碼
          </h4>

          <div className="form-group form-row">
            <label className="col-lg-4">請輸入Email:</label>
            <input
              type="text"
              className="form-control"
              value={this.state.email}
              onChange={(event) => {
                this.setState({ email: event.target.value });
              }}
            ></input>

            <label className="col-lg-4" style={{ marginTop: 30 }}>
              請輸入驗證碼:
            </label>
            <input
              type="text"
              className="form-control"
              style={{ width: "30%" }}
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
                送出
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
