import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div
          id="carouselExampleAutoplaying"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="ICON.png" class="d-block w-100 Bar-style" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="Bar1.png" class="d-block w-100 Bar-style" alt="..." />
            </div>
            <div class="carousel-item">
              <img
                src="https://www.lifegate.com/app/uploads/mare-fa-bene-2.jpg"
                class="d-block w-100 Bar-style"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

        <div id="container">
          <div class="button" id="button">
            <div id="slide"></div>
            <a href="/handiheshop">汗滴禾Shop農產品商店</a>
          </div>
          <div class="button" id="button">
            <div id="slide"></div>
            <a href="/social">社群系統</a>
          </div>
          <div class="button" id="button">
            <div id="slide"></div>
            <a href="/grouppurchase">團購gogogo</a>
          </div>
        </div>

        <div>
          <h3
            className="text-center"
            style={{ color: "#066b06d4", fontWeight: "bold" }}
          >
            惜食專區
          </h3>
        </div>
      </div>
    );
  }
}
