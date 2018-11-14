import React, { Component, Fragment } from "react";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import "./index.css";

import MenuBar from "../../components/MenuBar";
import SideBar from "../../components/SideBar";
import TopBanner from "../../components/TopBanner";
import HeaderContent from "../../components/HeaderContent";
import SwitchMenu from "../../components/SwitchMenu";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopPage from "../../components/pages/TopPage";
import UserCordinaterPage from "../../components/pages/UserCordinaterPage";
import CordinatePage from "../../components/pages/CordinatePage";
import NoPage from "../../components/pages/NoPage";

import { Row, Layout } from "antd";

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
            <Layout>
              <Header
                style={{
                  position: "fixed",
                  zIndex: 100,
                  width: "100%",
                  boxShadow: "0 0 6px rgba(0, 0, 0, 0.3)",
                  opacity: 0.9
                }}
              >
                <HeaderContent />
              </Header>
              <Layout style={{ marginTop: 54 }}>
                <TopBanner />
              </Layout>
              <MenuBar />
              <Layout style={{ padding: "10px 0 0 0" }}>
                <SwitchMenu />
              </Layout>
              <Layout>
                <div
                  style={{
                    width: 990,
                    height: 3000,
                    margin: "30px auto 0 auto"
                  }}
                >
                  <Sider width={180} style={{ float: "left" }}>
                    <SideBar />
                  </Sider>
                  <Content style={{ width: 780, float: "right" }}>
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
                </div>
              </Layout>
              <Row
                style={{
                  height: 252,
                  borderTop: "1px #ddd solid",
                  background: "#f6f7f8",
                  padding: "30px 0 0 0"
                }}
              >
                <div />
              </Row>
              >
              <Row
                style={{
                  height: 235,
                  borderTop: "1px #ddd solid",
                  background: "#e8e8e8"
                }}
              >
                <div />
              </Row>
              <Footer
                style={{
                  textAlign: "center",
                  borderTop: "1px #ddd solid",
                  height: 356,
                  padding: "52px 0 52px 0"
                }}
              >
                COPYRIGHT ©XXXX Technologies
              </Footer>
            </Layout>
          </Fragment>
        </Router>
      </ApolloProvider>
    );
  }
}

export default Wear;
