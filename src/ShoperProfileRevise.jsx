import React, { Component } from "react";

export default class ShoperProfileRevise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      phone: "",
      address: "",
      birthday: "",
      photo: "https://cdn-icons-png.flaticon.com/128/149/149071.png",
    };
  }
  render() {
    return (
      <div className="container-fluid form-wm">
        <h4 className="border-bottom">商家資訊</h4>
        <div className="form-group form-row">
          <label className="col-lg-4 content-margin">商家名稱</label>
          <input
            type="text"
            className="form-control"
            value={this.state.name}
            onChange={(event) => {
              this.setState({ name: event.target.value });
            }}
          ></input>
        </div>

        <div className="form-group form-row">
          <label className="col-lg-4 content-margin">Email</label>
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
          <label className="col-lg-4 content-margin">密碼</label>
          <input
            type="password"
            className="form-control"
            value={this.state.password}
            onChange={(event) => {
              this.setState({ password: event.target.value });
            }}
          ></input>
        </div>

        <div className="form-group form-row">
          <span className="necessary-icon">*</span>
          <label className="col-lg-4 content-margin">電話</label>
          <input
            type="text"
            className="form-control"
            value={this.state.phone}
            onChange={(event) => {
              this.setState({ phone: event.target.value });
            }}
          ></input>
        </div>

        <div className="form-group form-row">
          <label className="col-lg-4 content-margin">商家地址</label>
          <input
            type="text"
            className="form-control"
            value={this.state.address}
            onChange={(event) => {
              this.setState({ address: event.target.value });
            }}
          ></input>
        </div>

        <div className="content-margin">
          <label>營業執照上傳</label>
          <div style={{ border: "1px solid" }}>
            <div className="text-center">
              <img
                alt="preview image"
                src={this.state.photo}
                width={"150px"}
                height={"150px"}
              />
            </div>
            <div className="text-center ">
              <input
                type="file"
                onChange={this.onImageChange}
                className="filetype content-margin text-center"
              />
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            className="btn btn-primary content-margin"
            style={{
              width: "150px",
              height: "40px",
              fontSize: "16px",
            }}
            onClick={this.onRegiClick}
          >
            確認更改
          </button>
        </div>
      </div>
    );
  }
  onRegiClick = () => {
    console.log(this.state);
  };

  onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      this.setState({ photo: URL.createObjectURL(event.target.files[0]) });
    }
  };
}
