import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

function HeaderLayout() {
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={["1"]}
      style={{ lineHeight: "64px" }}
    >
      <Menu.Item key="1">
        <Link to="/dashboard">Dashboard</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/formz">Formz</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/webhookz">Webhoookz</Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link to="/developers">API</Link>
      </Menu.Item>
    </Menu>
  );
}

export default HeaderLayout;
