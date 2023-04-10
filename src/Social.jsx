import React, { Component } from "react";

export default class Social extends Component {
  constructor(props) {
    super(props);
    this.state = { content: "", photo: "" };
  }

  render() {
    return (
      <div className="page-margin">
        <h4 className="text-center content-margin">社群系統</h4>
        <div className="p-4" style={{ background: "gray" }}>
          <h5>編輯內文</h5>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <textarea></textarea>
          </div>

          <p className="content-margin">上傳圖檔(非必要)</p>
          <input type="file" className="filetype"></input>

          <div className="text-center">
            <button
              className="btn btn-success content-margin"
              style={{
                width: "700px",
                height: "40px",
                fontSize: "16px",
              }}
            >
              發布
            </button>
          </div>
        </div>

        <div>
          <hr style={{ marginTop: "50px" }}></hr>
          <h5 style={{ textAlign: "center", marginBottom: "50px" }}>
            貼文瀏覽
          </h5>
        </div>

        {/* 貼文範圍 */}
        <div style={{ marginBottom: "40px" }}>
          <div className="d-flex">
            <img
              src="YanChaoPos.png"
              width={"50px"}
              height={"50px"}
              style={{ borderRadius: "50%", marginRight: "10px" }}
            ></img>
            <span
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              username
            </span>
          </div>
          <div
            style={{
              marginTop: "15px",
              backgroundColor: "gray",
              height: "400px",
              padding: "20px",
            }}
          >
            內文
          </div>
        </div>
        {/* 貼文範圍 */}
        <div style={{ marginBottom: "40px" }}>
          <div className="d-flex">
            <img
              src="YanChaoPos.png"
              width={"50px"}
              height={"50px"}
              style={{ borderRadius: "50%", marginRight: "10px" }}
            ></img>
            <span
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              username
            </span>
          </div>
          <div
            style={{
              marginTop: "15px",
              backgroundColor: "gray",
              height: "400px",
              padding: "20px",
            }}
          >
            內文
          </div>
        </div>
        <div style={{ marginBottom: "40px" }}>
          <div className="d-flex">
            <img
              src="YanChaoPos.png"
              width={"50px"}
              height={"50px"}
              style={{ borderRadius: "50%", marginRight: "10px" }}
            ></img>
            <span
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              username
            </span>
          </div>
          <div
            style={{
              marginTop: "15px",
              backgroundColor: "gray",
              height: "400px",
              padding: "20px",
            }}
          >
            內文
          </div>
        </div>
      </div>
    );
  }
}
