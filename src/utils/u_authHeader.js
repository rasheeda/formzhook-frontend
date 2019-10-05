import {refreshAccessToken} from "../services/s_auth";
import auth from './u_auth';

export function authHeader() {

  //check if access token is expired, before making a request
  if (auth.isTokenExpired()) {
    //request a new token
    refreshAccessToken()
    .json(response => {
        console.log('requested token refresh response:', response)
        auth.setAccessToken(response.access_token);
    })
    .catch(() => {});
  }

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
