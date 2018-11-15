import React, { Component, Fragment } from "react";

import { Card, Avatar, Icon, Button } from "antd";

const { Meta } = Card;

const UserCard = props => {
  return (
    <div>
      <Card
        hoverable
        style={{
          float: "left",
          width: 248,
          height: 388,
          margin: "18px 0 0 18px",
          border: "1px #ddd solid",
          borderRadius: "3px",
          zIndex: 1
        }}
        cover={
          <div>
            <p
              style={{
                position: "absolute",
                left: "8px",
                top: "8px",
                fontSize: "14px",
                lineHeight: "25px",
                width: "29px",
                height: "29px",
                border: "2px solid",
                borderColor: props.rankColor,
                background: "rgba(0, 0, 0, 0.8)",
                textAlign: "center",
                color: "#fff",
                borderRadius: "50%",
                fontFamily:
                  'Helvetica Neue", "Helvetica", "Arial", "Verdana", sans-serif'
              }}
            >
              {props.rankNumber}
            </p>
            <img
              style={{ height: 328 }}
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          </div>
        }
      >
        <Meta
          avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          title={
            <span style={{ fontSize: 15 }}>
              まる
              <Icon type="check-circle" theme="filled" />
            </span>
          }
          description="161cm, JP"
        >
          <Button
            type="primary"
            style={{
              bottom: 10,
              float: "right",
              width: 64,
              height: 38,
              zIndex: 1000
            }}
          />
        </Meta>
      </Card>
    </div>
  );
};

const RankingUpdate = () => {
  return (
    <div style={{ width: 780, height: 28 }}>
      <h2 style={{ display: "inline-block", fontSize: "18px" }}>ランキング</h2>
      <p
        style={{
          display: "inline-block",
          fontSize: "12px",
          color: "#888",
          margin: "0 0 0 8px"
        }}
      >
        UPDATE 17:00
      </p>
    </div>
  );
};

export default class CordinatePage extends Component {
  render() {
    return (
      <Fragment>
        <div style={{ width: 780, height: 479 }}>
          <RankingUpdate />
          <div style={{ width: 798, height: 406, margin: "-8px 0 0 -18px" }}>
            <UserCard rankNumber={1} rankColor="#ffe400" />
            <UserCard rankNumber={2} rankColor="#dcdcdc" />
            <UserCard rankNumber={3} rankColor="#9a5b00" />

            <div style={{ background: "#f6f7f8", float: "right" }}>
              <Button
                style={{
                  width: 112,
                  fontSize: "12px",
                  margin: "12px 0 0 0 ",
                  height: 41,
                  border: "1px #ddd solid",
                  borderRadius: "2px",
                  background: "#fafafa"
                }}
              >
                <span style={{ color: "#888", fontWeight: "bold" }}>
                  もっとみる
                </span>
              </Button>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
