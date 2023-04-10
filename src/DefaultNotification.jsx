import React, { Component } from "react";

export default class DefaultNotification extends Component {
  render() {
    return (
      <div
        className="page-margin content-margin d-flex"
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: "500px",
        }}
      >
        <h2>
          <a href="/loginidentitychoose" style={{ color: "rgb(0, 64, 255)" }}>
            登入
          </a>
          即可查看通知！
        </h2>
      </div>
    );
  }
}
