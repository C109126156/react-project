import React, { Component } from "react";

export default class ShopperInfo extends Component {
  render() {
    return (
      <div className="page-margin content-margin">
        <h2 className="text-center">商家資訊</h2>
        <form
          className="d-flex"
          role="search"
          style={{ justifyContent: "end" }}
        >
          <input
            className="form-control me-2 w-25"
            type="search"
            placeholder="搜尋店家"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            查詢
          </button>
        </form>
        {/* 商家資訊區塊 */}
        <div className="content-margin d-flex">
          <img
            src="YanChaoPos.png"
            width={"150px"}
            height={"150px"}
            style={{ borderRadius: "50%", marginRight: "10px" }}
          ></img>
          <a href="#" className="w-100">
            <img src="YanChaoPos.png" width={"100%"} height={"150px"}></img>
          </a>
        </div>
        <hr className="content-margin"></hr>
        {/* 商家資訊區塊 */}
        <div className="content-margin d-flex">
          <img
            src="YanChaoPos.png"
            width={"150px"}
            height={"150px"}
            style={{ borderRadius: "50%", marginRight: "10px" }}
          ></img>
          <a href="#" className="w-100">
            <img src="YanChaoPos.png" width={"100%"} height={"150px"}></img>
          </a>
        </div>
        <hr className="content-margin"></hr>

        <div className="content-margin d-flex">
          <img
            src="YanChaoPos.png"
            width={"150px"}
            height={"150px"}
            style={{ borderRadius: "50%", marginRight: "10px" }}
          ></img>
          <a href="#" className="w-100">
            <img src="YanChaoPos.png" width={"100%"} height={"150px"}></img>
          </a>
        </div>
        <hr className="content-margin"></hr>
      </div>
    );
  }
}
