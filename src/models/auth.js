import decode from "jwt-decode";
import {logoutAccessToken, logoutRefreshToken} from "../services/auth";

class Auth {
  constructor() {
    if (this.getAccessToken()) {
      this.authenticated = true;
    } else {
      this.authenticated = false;
    }
  }

  login(cb) {
    this.authenticated = true;
    cb();
  }

  logout(cb) {
    this.authenticated = false;

    logoutAccessToken()
    .json(response => {
        console.log('logout revoked access token response:', response)
        localStorage.removeItem("access_token");
    })
    .catch(() => {});

    logoutRefreshToken()
    .json(response => {
        console.log('logout revoked token refresh response:', response)
        localStorage.removeItem("refresh_token");
    })
    .catch(() => {});

    cb();
  }

  isAuthenticated() {
    return this.authenticated;
  }

  getAccessToken() {
    return localStorage.getItem("access_token");
  }

  setAccessToken(token) {
    localStorage.setItem("access_token", token);
  }

  loggedIn = () => {
    // Checks if there is a saved token and it's still valid
    const token = this.getAccessToken();
    return !!token;
  };

  setRefreshToken(token) {
    localStorage.setItem("refresh_token", token);
  }

  getRefreshToken() {
    return localStorage.getItem("refresh_token");
  }

  isTokenExpired = () => {
    try {
      const decoded = decode(this.getAccessToken());
      if (decoded.exp < Date.now() / 1000) {
        // Checking if token is expired.
        return true;
      } else return false;
    } catch (err) {
      console.log("token expired. Request a new one");
      return true;
    }
  };
}

export default new Auth();
