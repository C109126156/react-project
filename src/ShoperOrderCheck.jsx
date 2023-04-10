import React, { Component } from "react";

export default class MemOrderCheck extends Component {
  render() {
    return (
      <div className="page-margin content-margin">
        <div>
          <h4>進行中的訂單</h4>
          <hr></hr>
          <div className="text-center" style={{ height: "300px" }}>
            <h5>目前尚無訂單資訊！</h5> {/* 根據是否有訂單改變呈現 */}
          </div>
        </div>

        <div>
          <h4>已完成的訂單</h4>
          <hr />
          <div className="text-center">
            <h5>目前尚無訂單資訊！</h5> {/* 根據是否有訂單改變呈現 */}
          </div>
        </div>
      </div>
    );
  }
}
