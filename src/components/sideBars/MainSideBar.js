import React, { Component, Fragment } from "react";
import { Menu, Icon, Divider } from "antd";
import { Link } from "react-router-dom";

export default class MainSideBar extends Component {
  render() {
    return (
      <Fragment>
        <h2 style={{ fontSize: "18px" }}>探す</h2>
        <Menu
          style={{
            background: "#f6f7f8",
            width: 180,
            height: 30,

            padding: "0 0"
          }}
        >
          <Menu.Item
            key="1"
            style={{
              padding: "0 0",
              height: 30,
              color: "#333",
              fontSize: "13px",
              margin: "0"
            }}
          >
            <Link to="/CordinatePageMenuBar">
              <Icon type="camera" style={{ textAlign: "left" }} />
              コーディネートを探す
            </Link>
          </Menu.Item>

          <Menu.Item
            key="2"
            style={{ padding: "0 0", height: 30, fontSize: "13px" }}
          >
            <Icon type="user" />
            ユーザーを探す
          </Menu.Item>
          <Menu.Item
            key="3"
            style={{ padding: "0 0", height: 30, fontSize: "13px" }}
          >
            <Icon type="skin" />
            アイテムを探す
          </Menu.Item>
          <Menu.Item
            key="4"
            style={{ padding: "0 0", height: 30, fontSize: "13px" }}
          >
            <Icon type="shop" />
            ショップを探す
          </Menu.Item>
          <Menu.Item
            key="5"
            style={{ padding: "0 0", height: 30, fontSize: "13px" }}
          >
            <Icon type="tag" />
            ブランドを探す
          </Menu.Item>
          <Divider />
        </Menu>
      </Fragment>
    );
  }
}
