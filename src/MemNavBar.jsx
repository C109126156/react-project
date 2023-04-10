import React, { Component } from "react";
import { Link } from "react-router-dom";

class MemNavBar extends Component {
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
                <Link to="/memordercheck" className="nav-link">
                  訂單查詢
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/memnotification" className="nav-link">
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
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    選單(客人)
                  </a>
                  <ul class="dropdown-menu" style={{ width: "auto" }}>
                    <li>
                      <a
                        class="dropdown-item"
                        href="/login/memlogin/memprofilerevise"
                      >
                        會員資訊
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        儲值錢包
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        登出
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default MemNavBar;
