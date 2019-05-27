import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
// import Header from "./Header";
// import Menu from "./Menu";
import Typography from "@material-ui/core/Typography";
// import Content from "./Content";
import { BrowserRouter } from "react-router-dom";
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;


class Main extends Component {
  render() {

    return (
      <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">Dashboard</Menu.Item>
          <Menu.Item key="2">Formz</Menu.Item>
          <Menu.Item key="3">API</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          <Breadcrumb.Item>Formz</Breadcrumb.Item>
          <Breadcrumb.Item>API</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
    );
  }
}

export default Main;
