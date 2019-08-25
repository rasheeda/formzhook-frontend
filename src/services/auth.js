import wretch from "wretch";
import auth from "../models/auth";

const API_URL = "http://127.0.0.1:5000/api";

export const register = (email, password) =>
  wretch(`${API_URL}/users/register`)
    .headers({
      "Access-Control-Allow-Origin": "*",
      crossDomain: true
    })
    .post({ email: email, password: password });

export const login = (email, password) =>
  wretch(`${API_URL}/users/login`)
    .headers({
      "Access-Control-Allow-Origin": "*",
      crossDomain: true
    })
    .post({ email: email, password: password });

export const refreshAccessToken = () =>
  wretch(`${API_URL}/auth/token/refresh`)
    .headers({
      "Access-Control-Allow-Origin": "*",
      crossDomain: true,
      Authorization: `Bearer ${auth.getRefreshToken()}`
    })
    .post();

export const logoutAccessToken = () =>
  wretch(`${API_URL}/users/logout/access`)
    .headers({
      "Access-Control-Allow-Origin": "*",
      crossDomain: true,
      Authorization: `Bearer ${auth.getAccessToken()}`
    })
    .post();

export const logoutRefreshToken = () =>
  wretch(`${API_URL}/users/logout/refresh`)
    .headers({
      "Access-Control-Allow-Origin": "*",
      crossDomain: true,
      Authorization: `Bearer ${auth.getRefreshToken()}`
    })
    .post();
