import React, { Component, Fragment } from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import { Card, Row, Col } from "antd";

const { Meta } = Card;

export default class CordinatePage extends Component {
  render() {
    return (
      <Fragment>
        <Row>
          <Col span={8}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
        </Row>
        <div>
          <Query query={USERS_INFO}>
            {({ loading, error, data }) => {
              if (loading) return <p>Loading...</p>;
              if (error) return <p>Error :(</p>;

              return data.users.map(user => (
                <div key={user.user_id}>
                  <img
                    src={user.image_url}
                    alt="{use.name}"
                    style={{ maxHeight: "200px", maxWidth: "200px" }}
                  />
                  <p>{`${user.user_id}: ${user.name}`}</p>
                  <p>{`${user.height} : ${user.gender} : ${
                    user.birth_place
                  }`}</p>
                </div>
              ));
            }}
          </Query>
          <h1>コーディネーター</h1>
          コーディネーターのページです きてます
        </div>
      </Fragment>
    );
  }
}

const USERS_INFO = gql`
  {
    users {
      user_id
      name
      image_url
      height
      gender
      birth_place
    }
  }
`;
