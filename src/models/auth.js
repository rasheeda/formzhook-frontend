class Auth {

  constructor() {
    if (this.getToken()) {
      this.authenticated = true;
    }
    else {
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

  getToken() {
    return localStorage.getItem("user");
  }

  setToken(token) {
    localStorage.setItem('user', token)
  }

  loggedIn = () => {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken(); // Getting token from localstorage
    return !!token
  };
}

export default new Auth();
