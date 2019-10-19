import React from "react";
import { Layout } from "antd";
import AuthLayoutContent from "./AuthLayoutContent";
import { BrowserRouter } from "react-router-dom";

const { Content, Footer } = Layout;

const AuthLayout = () => {
  return (
    <BrowserRouter>
      <Layout className="layout">
        <Content
          style={{
            margin: "0 auto 0 auto",
            marginTop: 30,
            minWidth: 1000
          }}
        >
          <div style={{ background: "#fff", padding: 30, minHeight: 280 }}>
            <AuthLayoutContent />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Formz API Service, {new Date().getFullYear()}
        </Footer>
      </Layout>
    </BrowserRouter>
  );
};

export default AuthLayout;
