import React, { Component, Fragment } from "react";
import banner from "../assets/spring_pc_hdr.png";

export default class TopBanner extends Component {
  render() {
    return (
      <Fragment>
        <div
          style={{
            height: 56,
            textAlign: "center",
            overflow: "hidden",
            background: "#766d3f"
          }}
        >
          <p>
            <a href="">
              <img alt="banner" src={banner} width="990" height="56" />
            </a>
          </p>
        </div>
      </Fragment>
    );
  }
}
