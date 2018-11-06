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

import { Layout, Menu, Breadcrumb } from "antd";

const { Header, Footer, Sider, Content } = Layout;

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
              <Header />
              <Header>
                <div className="logo" />
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
                  <Breadcrumb style={{ margin: "16px 0" }}>
                    <Breadcrumb.Item> </Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                  </Breadcrumb>
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
