import wretch from "wretch";

const API_URL = 'http://127.0.0.1:5000/api';

export const register = (email, password) =>
  wretch(`${API_URL}/users/register`)
    .headers({
      "Access-Control-Allow-Origin": "*",
      crossDomain: true
    })
    .post({'email': email, 'password': password});


export const login = (email, password) =>
  wretch(`${API_URL}/users/login`)
    .headers({
      "Access-Control-Allow-Origin": "*",
      crossDomain: true
    })
    .post({'email': email, 'password': password});