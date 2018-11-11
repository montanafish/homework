import React, { Component } from "react";

export default class MenuBar extends Component {
  render() {
    return (
      <div style={{ height: 47, background: "#fff" }}>
        <nav style={{ width: 990, textAlign: "center" }}>
          <ul
            style={{
              listStyle: "none",
              textAlign: "center"
            }}
          >
            <li style={{ width: 140, float: "left" }}>
              <a href="#">ALL</a>
            </li>
            <li style={{ width: 140, float: "left" }}>
              <a href="#">MEN</a>
            </li>
            <li style={{ width: 140, float: "left" }}>
              <a href="#">WOMEN</a>
            </li>
            <li style={{ width: 140, float: "left" }}>
              <a href="#">KIDS</a>
            </li>
            <li style={{ width: 140, float: "left" }}>
              <a href="#">WORLD</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
