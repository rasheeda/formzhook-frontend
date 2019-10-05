import React, { Component } from "react";
import HeaderLayout from "../HeaderLayout";
import MainContent from "../MainContent";
import { BrowserRouter } from "react-router-dom";
import "antd/dist/antd.css";
import "./main.css";
import { Layout, Breadcrumb } from "antd";

const { Header, Content, Footer } = Layout;

class MainLayout extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <HeaderLayout />
          </Header>
          <Content style={{ padding: "0 50px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
              <Breadcrumb.Item>Formz</Breadcrumb.Item>
              <Breadcrumb.Item>API</Breadcrumb.Item>
            </Breadcrumb>
            <div className="mainContainer">
              <MainContent />
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

export default MainLayout;
