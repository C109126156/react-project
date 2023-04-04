import React, { Component } from "react";

export default class GroupPurchase extends Component {
  state = { purdeadline: "2023/3/27 00:00" };

  render() {
    return (
      <div className="page-margin content-margin">
        <h4 style={{ fontWeight: "bold" }}>發起團購</h4>
        <div className="content-margin">
          <label>團購物品:</label>
          <select class="form-select" aria-label="Default select example">
            <option selected>請選擇團購商品</option>
            <option value="1">芭樂</option>
            <option value="2">香蕉</option>
            <option value="3">榴槤</option>
          </select>
        </div>

        <div className="content-margin">
          <label>團購條件:</label>
          <textarea disabled>無限制</textarea>
        </div>

        <div className="content-margin">
          <label>團購期限:</label>
          <p style={{ fontWeight: "bold" }}>{this.state.purdeadline}止</p>
        </div>

        <div className="content-margin">
          <label>訂購數量:</label>
          <select class="form-select" aria-label="Default select example">
            <option selected>請選擇數量</option>
            <option value="1">10</option>
            <option value="2">11</option>
            <option value="3">12</option>
          </select>
        </div>

        <div className="text-end">
          <button
            className="btn btn-primary content-margin"
            style={{
              width: "100px",
              height: "40px",
              fontSize: "16px",
            }}
            onClick={this.onRegiClick}
          >
            送出
          </button>
        </div>
      </div>
    );
  }
}
