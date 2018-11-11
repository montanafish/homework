import React, { Component, Fragment } from "react";
import { Query, Mutation } from "react-apollo";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import "./index.css";
import banner from "../../assets/spring_pc_hdr.png";
import {
  NavLink,
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from "react-router-dom";
import { gql } from "apollo-boost";
import TopPage from "../../components/TopPage";
import UserCordinaterPage from "../../components/UserCordinaterPage";
import CordinatePage from "../../components/CordinatePage";
import NoPage from "../../components/NoPage";

import { Radio, Row, Input, Layout, Menu, Icon, Breadcrumb } from "antd";

const { Header, Footer, Sider, Content } = Layout;
const Search = Input.Search;

const client = new ApolloClient({
  uri: "https://hamlet-staging.herokuapp.com/v1alpha1/graphql"
});

class Wear extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Fragment>
            <Layout className="layout">
              <Header
                style={{
                  position: "fixed",
                  zIndex: 100,
                  width: "100%",
                  background: "white",
                  boxShadow: "0 0 6px rgba(0, 0, 0, 0.3)",
                  opacity: 0.9
                }}
              >
                <div
                  style={{
                    width: "990px",
                    height: "54px",
                    position: "relative",
                    margin: "0 auto 0 auto"
                  }}
                >
                  <Search
                    placeholder="コーディネートやユーザーを探す"
                    onSearch={value => console.log(value)}
                    style={{
                      width: 264,
                      height: 36,
                      position: "relative"
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
                      right: 0,
                      top: "15px",
                      width: "300px",
                      textAlign: "right",
                      fontSize: "14px",
                      color: "#333",
                      margin: "0 auto 0 auto"
                    }}
                  >
                    <Breadcrumb.Item href="">
                      <Icon type="user" style={{ fontSize: "20px" }} />
                      <span style={{ color: "#333" }}>ログイン</span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="">
                      <span style={{ color: "#333" }}>新規会員登録</span>
                    </Breadcrumb.Item>
                  </Breadcrumb>
                </div>
              </Header>
            </Layout>
            <Layout style={{ padding: "54px 0 0 0 " }}>
              <div
                style={{
                  height: 56,
                  textAlign: "center",
                  overflow: "hidden",
                  background: "#766d3f"
                }}
              >
                <p>
                  <a href="">
                    <img alt="banner" src={banner} width="990" height="56" />
                  </a>
                </p>
              </div>

              <Menu
                mode="horizontal"
                defaultSelectedKeys={["1"]}
                style={{
                  textAlign: "center",
                  background: "#fff"
                }}
              >
                <Menu.Item
                  key="1"
                  style={{
                    height: "46px",
                    fontSize: "17px",
                    fontFamily:
                      ' "Helvetica Neue", "Helvetica", "Arial", "Verdana", sans-serif'
                  }}
                >
                  <div style={{ width: 115 }}>
                    <Link to="/Cordinate">ALL</Link>
                  </div>
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
            </Layout>

            <Layout style={{ padding: "10px 0 0 0 " }}>
              <Row style={{ margin: "13px auto 0 auto" }}>
                <Radio.Group defaultValue="a" buttonStyle="solid">
                  <Radio.Button
                    value="a"
                    style={{ width: 140, textAlign: "center" }}
                  >
                    おすすめ
                  </Radio.Button>
                  <Radio.Button
                    value="b"
                    style={{ width: 140, textAlign: "center" }}
                  >
                    タイムライン
                  </Radio.Button>
                </Radio.Group>
              </Row>
              <Layout style={{ margin: "30px auto 0 auto" }}>
                <Layout style={{ width: 990 }}>
                  <Sider width={180}>
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
                  </Sider>
                  <Content style={{ padding: "0 50 0 0px" }}>
                    <Switch>
                      <Route path="/" exact component={TopPage} />
                      <Route
                        path="/Cordinate"
                        exact
                        component={CordinatePage}
                      />
                      <Route
                        path="/UserCordinater"
                        exact
                        component={UserCordinaterPage}
                      />
                      <Route exact component={NoPage} />
                    </Switch>
                  </Content>
                </Layout>
              </Layout>
            </Layout>
            <Layout>
              <Footer style={{ textAlign: "center" }}>
                COPYRIGHT ©XXXX Technologies
              </Footer>
            </Layout>
          </Fragment>
        </Router>
      </ApolloProvider>
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

export default Wear;
