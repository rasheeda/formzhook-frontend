import React from "react";
import HeaderLayout from "../HeaderLayout";
import MainContent from "../MainContent";
import { BrowserRouter, Link, Redirect } from "react-router-dom";
import "antd/dist/antd.css";
import "./main.css";
import { Layout, Divider } from "antd";
import auth from "../../utils/u_auth";
import LandingPage from "../../pages/LandingPage";

const { Header, Content, Footer } = Layout;

const MainLayout = () => {
  if (!auth.isAuthenticated()) {
    return <LandingPage />;
  }

  return (
    <BrowserRouter>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <HeaderLayout />
        </Header>
        <Content
          style={{ padding: "0 50px", maxWidth: 1300, margin: "0 auto 0 auto" }}
        >
          <div className="mainContainer">
            <MainContent />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Formz API Service, {new Date().getFullYear()}{" "}
          <Divider type="vertical" />{" "}
          {auth.isAuthenticated() === true && (
            <Link onClick={logout}>Logout</Link>
          )}
        </Footer>
      </Layout>
    </BrowserRouter>
  );
};

function logout() {
  auth.logout(() => {
    return setTimeout(function() {
      window.location.reload();
    }, 100);
  });
}

export default MainLayout;
