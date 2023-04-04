import React, { Component } from "react";

export default class Social extends Component {
  constructor(props) {
    super(props);
    this.state = { content: "", photo: "" };
  }

  render() {
    return (
      <div style={{ margin: "0px 200px 0 200px" }}>
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
          <h5 style={{ textAlign: "center" }}>貼文瀏覽</h5>
        </div>
      </div>
    );
  }
}
