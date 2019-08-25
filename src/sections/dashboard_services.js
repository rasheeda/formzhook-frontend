import wretch from "wretch";
import { FORMZ_API_URL } from "../constants";
import auth from "../models/auth";
import {authHeader} from "../models/authHeader";

export const getFormDataCount = () =>
  wretch(`${FORMZ_API_URL}/data/graph`)
    .headers(authHeader())
    .get();

export const getFormDataDateCount = () =>
  wretch(`${FORMZ_API_URL}/data/count/graph`)
    .headers(authHeader())
    .get();
