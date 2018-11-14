import React, { Component, Fragment } from "react";

import { Card, Avatar, Icon, Button } from "antd";

const { Meta } = Card;
const UserCard = rankNumber => {
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
          <Fragment>
            <p
              style={{
                position: "absolute",
                left: "8px",
                top: "8px",
                fontSize: "14px",
                lineHeight: "25px",
                width: "29px",
                height: "29px",
                border: "2px #666 solid",
                background: "rgba(0, 0, 0, 0.8)",
                textAlign: "center",
                color: "#fff",
                borderRadius: "50%",
                fontFamily:
                  'Helvetica Neue", "Helvetica", "Arial", "Verdana", sans-serif'
              }}
            >
              1
            </p>
            <img
              style={{ height: 328 }}
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          </Fragment>
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
        />
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
            <UserCard />
            <UserCard />
            <UserCard />

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
