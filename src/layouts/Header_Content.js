import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

function Header_Content() {
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={["2"]}
      style={{ lineHeight: "64px" }}
    >
      <Menu.Item key="1">
        <Link to="/">Dashboard</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/formz">Formz</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/developers">API</Link>
      </Menu.Item>
    </Menu>
  );
}

export default Header_Content;
