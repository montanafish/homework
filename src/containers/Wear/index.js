import React, { Component, Fragment } from "react";
import { Query, Mutation } from "react-apollo";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import "./index.css";
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

import { Row, Column, Input, Layout, Menu, Breadcrumb } from "antd";

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
              <Header style={{ position: "fixed", width: "100%" }}>
                <Search
                  placeholder="コーディネートやユーザーを探す"
                  onSearch={value => console.log(value)}
                  style={{
                    width: 264,
                    height: 36,
                    position: "relative",
                    background: "#f5f5f5"
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
                      fontSize: 30,
                      fontWeight: "bold",
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
              </Header>
              <Header>
                <Menu
                  theme="dark"
                  mode="horizontal"
                  defaultSelectedKeys={["1"]}
                  style={{ lineHeight: "64px" }}
                >
                  <Menu.Item key="1">
                    <Link to="/">>top</Link>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <Link to="/Cordinate">コーディネート</Link>
                  </Menu.Item>
                  <Menu.Item key="3">
                    <Link to="/UserCordinater">ユーザー</Link>
                  </Menu.Item>
                </Menu>
              </Header>
              <Layout>
                <Sider width={200} style={{ background: "#fff" }}>
                  Sider
                </Sider>
                <Content style={{ padding: "0 50px" }}>
                  <div
                    style={{ background: "#fff", padding: 24, minHeight: 560 }}
                  >
                    <Switch>
                      Content
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
                  </div>
                </Content>
              </Layout>
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
