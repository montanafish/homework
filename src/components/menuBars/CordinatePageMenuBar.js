import React, { Component } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

export default class CordinatePageMenuBar extends Component {
  render() {
    return (
      <Menu
        mode="horizontal"
        theme="dark"
        defaultSelectedKeys={["1"]}
        style={{
          mode: "inline",
          textAlign: "center"
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
          コーディネート
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
          ユーザー
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
          アイテム
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
          ショップ
        </Menu.Item>
      </Menu>
    );
  }
}
