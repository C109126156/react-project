import React, { Component } from "react";

export default class MemProfileRevise extends Component {
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
        <div className="row">
          <h4 className="border-bottom" style={{ marginBottom: 30 }}>
            會員資訊
          </h4>
          <div class="col-8">
            <div className="form-group form-row">
              <label className="col-lg-4">用戶名</label>
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
              <label className="col-lg-4" style={{ marginTop: 30 }}>
                Email
              </label>
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
              <label className="col-lg-4" style={{ marginTop: 30 }}>
                密碼
              </label>
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
              <label className="col-lg-4" style={{ marginTop: 30 }}>
                手機
              </label>
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
              <label className="col-lg-4" style={{ marginTop: 30 }}>
                通訊地址
              </label>
              <input
                type="text"
                className="form-control"
                value={this.state.address}
                onChange={(event) => {
                  this.setState({ address: event.target.value });
                }}
              ></input>
            </div>

            <label className="col-lg-4" style={{ marginTop: 30 }}>
              性別
            </label>
            <div class="form-check" style={{ marginTop: 10 }}>
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                男
              </label>
            </div>

            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                女
              </label>
            </div>

            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                不提供
              </label>
            </div>

            <div class="form-group form-row">
              <label className="col-lg-4" style={{ marginTop: 30 }}>
                出生年月日：
              </label>
              <input
                class="form-control"
                type="date"
                value={this.state.birthday}
                onChange={(event) => {
                  this.setState({ birthday: event.target.value });
                }}
              />
            </div>
          </div>

          <div class="col-4">
            <div className="text-center">
              <img
                alt="preview image"
                src={this.state.photo}
                width={"150px"}
                height={"150px"}
                style={{ borderRadius: 20, borderRadius: "50%" }}
              />
              <input
                type="file"
                onChange={this.onImageChange}
                className="filetype"
                style={{
                  marginTop: 20,
                }}
              />
            </div>
          </div>

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
              確認更改
            </button>
          </div>
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
