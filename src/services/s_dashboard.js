import wretch from "wretch";
import { FORMZ_API_URL } from "../utils/u_constants";
import {authHeader} from "../utils/u_authHeader";

export const getFormDataCount = () =>
  wretch(`${FORMZ_API_URL}/data/graph`)
    .headers(authHeader())
    .get();

export const getFormDataDateCount = () =>
  wretch(`${FORMZ_API_URL}/data/count/graph`)
    .headers(authHeader())
    .get();
