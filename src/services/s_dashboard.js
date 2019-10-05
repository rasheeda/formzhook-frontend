import wretch from "wretch";
import { FORMZ_API_URL } from "../utils/u_constants";
import {authHeader} from "../utils/u_authHeader";

export const getFormDataCount = () =>
  wretch(`${FORMZ_API_URL}/data/graph/count`)
    .headers(authHeader())
    .get();

export const getFormDataDateCount = () =>
  wretch(`${FORMZ_API_URL}/data/graph/count/date`)
    .headers(authHeader())
    .get();

export const getTotalFormz = () =>
  wretch(`${FORMZ_API_URL}/total/count`)
    .headers(authHeader())
    .get();

export const getTotalFormzData = () =>
  wretch(`${FORMZ_API_URL}/data/total/count`)
    .headers(authHeader())
    .get();
