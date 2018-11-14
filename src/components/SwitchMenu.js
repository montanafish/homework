import React, { Component, Fragment } from "react";
import { Row, Radio } from "antd";

export default class SwitchMenu extends Component {
  render() {
    return (
      <Fragment>
        <Row style={{ margin: "13px auto 0 auto" }}>
          <Radio.Group defaultValue="a" buttonStyle="solid">
            <Radio.Button
              value="a"
              style={{
                width: 140,
                textAlign: "center",
                fontSize: "13px"
              }}
            >
              <span style={{ color: "rgba(170, 170, 170, 0.9)" }}>
                おすすめ
              </span>
            </Radio.Button>
            <Radio.Button
              value="b"
              style={{ width: 140, textAlign: "center", fontSize: "13px" }}
            >
              <span style={{ color: "rgba(170, 170, 170, 0.9)" }}>
                タイムライン
              </span>
            </Radio.Button>
          </Radio.Group>
        </Row>
      </Fragment>
    );
  }
}
