import React from "react";
import { Menu } from "antd";
import { Link, Redirect } from "react-router-dom";
import auth from "../models/auth";

function HeaderContent() {
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
      {console.log("isauthenticated: ", auth.isAuthenticated())}
      {auth.isAuthenticated() === true && (
        <Menu.Item key="4">
          <Link onClick={logout}>Logout</Link>
        </Menu.Item>
      )}
    </Menu>
  );
}

function logout() {
  auth.logout(() => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");

    //call the API to logout as well
  });
  return (
    <Redirect
      to={{
        pathname: "/login"
      }}
    />
  );
}

export default HeaderContent;
