import decode from "jwt-decode";

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
    localStorage.getItem("refresh_token");
  }

  isTokenExpired = () => {
    try {
      const decoded = decode(this.getAccessToken());
      if (decoded.exp < Date.now() / 1000) {
        // Checking if token is expired.
        return true;
      } else return false;
    } catch (err) {
      console.log("expired check failed! Line 42: AuthService.js");
      return false;
    }
  };
}

export default new Auth();
