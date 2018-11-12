import React, { Component, Fragment } from "react";
import { Layout, Menu, Icon } from "antd";

export default class SideBar extends Component {
  render() {
    return (
      <Fragment>
        <Layout>
          <h2 style={{ fontSize: "18px" }}>探す</h2>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ background: "#f6f7f8" }}
          >
            <Menu.Item key="1">コーディネートを探す</Menu.Item>
            <Menu.Item key="2">ユーザーを探す</Menu.Item>
            <Menu.Item key="3">アイテムを探す</Menu.Item>
            <Menu.Item key="4">ショップを探す</Menu.Item>
            <Menu.Item key="5">ブランドを探す</Menu.Item>
          </Menu>
        </Layout>
      </Fragment>
    );
  }
}
