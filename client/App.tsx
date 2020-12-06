import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Layout, Menu } from 'antd';
import { Registration } from './Registration/Registration';
import { Users } from './Users/Users';

const { Header, Content, Footer } = Layout;

export const App = () => (
  <div>
    <Router>
      <Layout>
        <Header>
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key="1">
              <Link to="/">Users</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/registration">Register</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content>
          <Switch>
            <Route path="/registration">
              <Registration />
            </Route>
            <Route path="/">
              <Users />
            </Route>
          </Switch>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Moments ©2018 Created by David Li</Footer>
      </Layout>
    </Router>
  </div>
);
