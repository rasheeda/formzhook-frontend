import React, { useState } from "react";
import NavbarContainer from "./../NavbarContainer";
import { Link } from "react-router-dom";
import SectionButton from "./../SectionButton";
import Auth from "../../../../utils/u_auth";
import "./styles.scss";

function Navbar(props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <NavbarContainer spaced={props.spaced} color={props.color}>
      <div className="container">
        <div className="navbar-brand">
          <div className="navbar-item">
            <Link to="/">
              <img className="image" src={props.logo} alt="Logo" />
            </Link>
          </div>
          <div
            className={"navbar-burger burger" + (menuOpen ? " is-active" : "")}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className={"navbar-menu" + (menuOpen ? " is-active" : "")}>
          <div className="navbar-start">
            <Link className="navbar-item" to="/about">
              About
            </Link>
            <Link className="navbar-item" to="/pricing">
              Pricing
            </Link>
            <div className="navbar-item has-dropdown is-hoverable" href="/">
              <span className="navbar-link">More</span>
              <div className="navbar-dropdown">
                <Link className="navbar-item" to="/faq">
                  FAQ
                </Link>
                <Link className="navbar-item" to="/contact">
                  Contact
                </Link>
                <a
                  className="navbar-item"
                  href="https://medium.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blog
                </a>
              </div>
            </div>
          </div>
          <div className="navbar-end">
            {Auth.isAuthenticated() && (
              <div className="navbar-item has-dropdown is-hoverable">
                <Link className="navbar-link" to="/">
                  Account
                </Link>
                <div className="navbar-dropdown is-boxed">
                  <Link className="navbar-item" to="/dashboard">
                    Dashboard
                  </Link>
                  <Link
                    className="navbar-item"
                    to="/signout"
                    onClick={e => {
                      e.preventDefault();
                      Auth.logout();
                    }}
                  >
                    Sign out
                  </Link>
                </div>
              </div>
            )}

            {!Auth.isAuthenticated() && (
              <>
                <Link className="navbar-item" to="/login">
                  Login
                </Link>
                <div className="navbar-item">
                  <SectionButton
                    parentColor={props.color}
                    size="normal"
                    onClick={() => {
                      window.location.push("/register");
                    }}
                  >
                    Sign Up
                  </SectionButton>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </NavbarContainer>
  );
}

export default Navbar;
