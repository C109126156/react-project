import React, { Component } from "react";

export default class ShoperPurSetting extends Component {
  state = {
    itemName: "",
    category: "",
    amount: "",
  };

  render() {
    return (
      <div>
        <div
          style={{ height: "200px", background: "red", border: "2px solid" }}
        ></div>

        <div
          className="page-margin content-margin text-center"
          style={{ background: "gray", height: "auto" }}
        >
          <div className="p-3 text-center">
            <p>1.編輯內容</p>
            <div>
              <span className="necessary-icon">*</span>
              <label>商品名稱:</label>
              <div>
                <input
                  className="w-50 text-center"
                  type="text"
                  value={this.state.itemName}
                  onChange={(event) => {
                    this.setState({ itemName: event.target.value });
                  }}
                ></input>
              </div>

              <div className="content-margin text-center">
                <label>商品種類:</label>
                <div>
                  <select
                    class="w-50 text-center"
                    aria-label="Default select example"
                  >
                    <option selected>請選擇種類</option>
                    <option value="1">水果</option>
                    <option value="2">蔬菜</option>
                    <option value="3">果乾</option>
                    <option value="4">其他</option>
                  </select>
                </div>
              </div>

              <div className="content-margin text-center">
                <label>物品介紹</label>
                <div>
                  <textarea
                    className="w-50"
                    style={{ height: "150px" }}
                  ></textarea>
                </div>
              </div>

              <hr className="content-margin" style={{ color: "white" }}></hr>

              <div className="content-margin">
                <p>2.圖片選擇(最多四張)</p>
                <div class="mb-3">
                  <input
                    class="w-25 border"
                    type="file"
                    id="formFileMultiple"
                    multiple
                  />
                </div>
              </div>

              <hr className="content-margin" style={{ color: "white" }}></hr>

              <div className="content-margin text-center">
                <label>3.價格(新台幣)</label>
                <div>
                  <input
                    className="w-50 text-center"
                    type="text"
                    value={this.state.amount}
                    onChange={(event) => {
                      this.setState({ amount: event.target.value });
                    }}
                  ></input>
                </div>
              </div>

              <hr className="content-margin" style={{ color: "white" }}></hr>

              <div className="content-margin text-center">
                <label>4.團購功能</label>
                <p className="content-margin">是否開啟團購?</p>
                <div
                  className="d-flex"
                  style={{
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <input
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      是
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                    />
                    <label class="form-check-label" for="flexRadioDefault2">
                      否
                    </label>
                  </div>
                </div>

                <div className="content-margin">
                  <label>團購設定</label>
                  <div
                    className="content-margin d-flex"
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <span className="necessary-icon">*</span>
                      <label>發起團購的最低人數</label>
                      <div>
                        <input
                          className="w-50 text-center"
                          type="text"
                          value={this.state.amount}
                          onChange={(event) => {
                            this.setState({ amount: event.target.value });
                          }}
                        ></input>
                      </div>
                    </div>

                    <div>
                      <span className="necessary-icon">*</span>
                      <label>發起團購的最低數量</label>
                      <div>
                        <input
                          className="w-50 text-center"
                          type="text"
                          value={this.state.amount}
                          onChange={(event) => {
                            this.setState({ amount: event.target.value });
                          }}
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-margin d-flex center-content">
                  <span className="necessary-icon">*</span>
                  <label>團購的價格優惠</label>
                </div>
                <div>
                  <input
                    className="w-50 text-center"
                    type="text"
                    value={this.state.amount}
                    onChange={(event) => {
                      this.setState({ amount: event.target.value });
                    }}
                  ></input>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
