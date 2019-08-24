import auth from "./auth";

export function authHeader() {
  // return authorization header with jwt token
  if (auth.isAuthenticated()) {
    return {
      "Access-Control-Allow-Origin": "*",
      crossDomain: true,
      Authorization: `Bearer ${auth.getAccessToken()}`,
      "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, HEAD",
    };
  } else {
    return {};
  }
}
