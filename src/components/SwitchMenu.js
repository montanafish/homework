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
              style={{ width: 140, textAlign: "center", background: "#333" }}
            >
              おすすめ
            </Radio.Button>
            <Radio.Button value="b" style={{ width: 140, textAlign: "center" }}>
              タイムライン
            </Radio.Button>
          </Radio.Group>
        </Row>
      </Fragment>
    );
  }
}
