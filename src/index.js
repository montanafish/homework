import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { NavLink, Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'

import FeedPage from './components/FeedPage'
import DraftsPage from './components/DraftsPage'
import CreatePage from './components/CreatePage'
import DetailPage from './components/DetailPage'

import './index.css'

import { Layout, Menu, Breadcrumb, Button } from 'antd'
const { Header, Content, Footer } = Layout

const client = new ApolloClient({ uri: 'https://hamlet-staging.herokuapp.com/v1alpha1/graphql' })

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <Fragment>
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ lineHeight: '64px' }}>
              <Menu.Item key="1">
                <NavLink exact={true} to="/" title="Feed">
                  Feed
                </NavLink>
              </Menu.Item>
              <Menu.Item key="2">
                <NavLink exact={true} to="/drafts" title="Drafts">
                  Drafts
                </NavLink>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/create">
                  <Button>+ Create Draft</Button>
                </Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <div style={{ background: '#fff', padding: 24, minHeight: 800 }}>
              <Switch>
                <Route exact path="/" component={FeedPage} />
                <Route path="/drafts" component={DraftsPage} />
                <Route path="/create" component={CreatePage} />
                <Route path="/post/:id" component={DetailPage} />
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Homework Footer</Footer>
        </Layout>
      </Fragment>
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
)
