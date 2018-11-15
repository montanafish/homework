import React, { Component, Fragment } from "react";
import { Input, Icon, Breadcrumb } from "antd";

const Search = Input.Search;

export default class HeaderContent extends Component {
  render() {
    return (
      <Fragment>
        <div
          style={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            height: "54px"
          }}
        >
          <div
            style={{
              width: "990px",
              height: "54px",
              margin: "0 auto 0 auto"
            }}
          >
            <Search
              placeholder="コーディネートやユーザーを探す"
              onSearch={value => console.log(value)}
              style={{
                width: 264,
                height: 36,
                float: "left",
                position: "absolute",
                top: "9px",
                left: 0
              }}
            />
            <h1
              style={{
                position: "absolute",
                left: "50%",
                top: 0,
                margin: "0 0 0 -75px",
                width: 150,
                height: 54
              }}
            >
              <a
                href=""
                style={{
                  fontSize: 24,
                  fontWeight: "900",
                  color: "#000",
                  lineHeight: 1,
                  letterSpacing: 0,
                  display: "block",
                  width: "100%",
                  height: "100%",
                  textAlign: "center",
                  padding: "16px 0 0 0 "
                }}
              >
                W E A R
              </a>
            </h1>

            <Breadcrumb
              separator="|"
              style={{
                position: "absolute",
                float: "right",
                right: 0,
                top: "15px",
                width: "300px",
                textAlign: "right",
                fontSize: "14px",
                color: "#333"
              }}
            >
              <Breadcrumb.Item href="">
                <Icon
                  type="user"
                  style={{
                    fontSize: "20px",
                    background: "#aaa"
                  }}
                />
                <span style={{ color: "#333" }}>ログイン</span>
              </Breadcrumb.Item>
              <Breadcrumb.Item href="">
                <span style={{ color: "#333" }}>新規会員登録</span>
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </Fragment>
    );
  }
}
