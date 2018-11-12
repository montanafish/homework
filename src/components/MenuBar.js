import React, { Component } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

export default class MenuBar extends Component {
  render() {
    return (
      <Menu
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{
          mode: "inline",
          textAlign: "center"
          // background: "#fff",
          // color: "#888"
        }}
      >
        <Menu.Item
          key="1"
          style={{
            width: "160px",
            height: "46px",
            fontSize: "17px",
            fontFamily:
              ' "Helvetica Neue", "Helvetica", "Arial", "Verdana", sans-serif'
          }}
        >
          <Link to="/Cordinate">
            <div style={{}}>ALL</div>
          </Link>
        </Menu.Item>
        <Menu.Item
          key="2"
          style={{
            width: "160px",
            height: "46px",
            fontSize: "17px",
            fontFamily:
              ' "Helvetica Neue", "Helvetica", "Arial", "Verdana", sans-serif'
          }}
        >
          <Link to="/">MEN</Link>
        </Menu.Item>
        <Menu.Item
          key="3"
          style={{
            width: "160px",
            height: "46px",
            fontSize: "17px",
            fontFamily:
              ' "Helvetica Neue", "Helvetica", "Arial", "Verdana", sans-serif'
          }}
        >
          <Link to="/UserCordinater">WOMEN</Link>
        </Menu.Item>
        <Menu.Item
          key="4"
          style={{
            width: "160px",
            height: "46px",
            fontSize: "17px",
            fontFamily:
              ' "Helvetica Neue", "Helvetica", "Arial", "Verdana", sans-serif'
          }}
        >
          <Link to="/kidsCordinate">KIDS</Link>
        </Menu.Item>
        <Menu.Item
          key="5"
          style={{
            width: "160px",
            height: "46px",
            fontSize: "17px",
            fontFamily:
              ' "Helvetica Neue", "Helvetica", "Arial", "Verdana", sans-serif'
          }}
        >
          <Link to="worldCordinate">WORLD</Link>
        </Menu.Item>
      </Menu>
    );
  }
}
