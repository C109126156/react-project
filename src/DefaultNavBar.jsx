import React, { Component } from "react";
import { Link } from "react-router-dom";

class DefaultNavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav
          className="navbar navbar-expand-lg bg-body-tertiary p-4"
          style={{ background: "#BFC0C0" }}
        >
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              燕耕園
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <ul
              style={{
                margin: 0,
                listStyle: "none",
                width: "50%",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <li className="nav-item">
                <Link to="/shopperinfo" className="nav-link">
                  商家資訊
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/introduction" className="nav-link">
                  燕巢介紹
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/defaultordercheck" className="nav-link">
                  訂單查詢
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/defaultnotification" className="nav-link">
                  通知
                </Link>
              </li>
            </ul>

            <div>
              <ul
                style={{
                  width: "200px",
                  margin: 0,
                  padding: 0,
                  listStyle: "none",
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <li className="nav-item">
                  <Link to="/loginidentitychoose" className="nav-link">
                    登入/註冊
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default DefaultNavBar;
