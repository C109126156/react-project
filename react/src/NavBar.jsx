import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg bg-body-tertiary p-4 ">
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
          </div>

          <div className="container-fluid">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item ">
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
                  <Link to="/ordercheck" className="nav-link">
                    訂單查詢
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/notification" className="nav-link">
                    通知
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/loginidentitychoose" className="nav-link">
                    登入
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

export default NavBar;
