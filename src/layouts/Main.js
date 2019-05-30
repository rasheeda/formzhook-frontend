import React, { Component } from "react";
import PropTypes from "prop-types";
import Header_Content from "./Header_Content";
import Main_Content from "./Main_Content";
import { BrowserRouter } from "react-router-dom";
import "antd/dist/antd.css";
import './main.css';
import { Layout, Breadcrumb } from "antd";

const { Header, Content, Footer } = Layout;

class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Header_Content />
          </Header>
          <Content style={{ padding: "0 50px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
              <Breadcrumb.Item>Formz</Breadcrumb.Item>
              <Breadcrumb.Item>API</Breadcrumb.Item>
            </Breadcrumb>
            <div className="mainContainer">
              <Main_Content />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Formz API Service, 2019
          </Footer>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default Main;
