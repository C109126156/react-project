import React, { Component } from "react";

export default class LoginIdentityChoose extends Component {
  render() {
    return (
      <div>
        <h3 className="content-margin text-center">請選擇身分</h3>
        <hr
          style={{
            marginLeft: "200px",
            marginRight: "200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></hr>

        <form
          className="container-fluid"
          style={{
            padding: "80px",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <button
            type="submit"
            className="btn btn-secondary"
            formaction="/login/memlogin"
            style={{
              borderRadius: "20px",
              width: "250px",
              height: "250px",
              fontSize: "24px",
            }}
          >
            我是客人
          </button>

          <button
            type="submit"
            className="btn btn-secondary"
            formaction="/login/shoperlogin"
            style={{
              borderRadius: "20px",
              width: "250px",
              height: "250px",
              fontSize: "24px",
            }}
          >
            我是商家
          </button>
        </form>
      </div>
    );
  }
}
