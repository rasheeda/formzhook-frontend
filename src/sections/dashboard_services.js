import wretch from "wretch";
import { FORMZ_API_URL } from "../constants";

export const getFormDataCount = ({dummyAuth}) =>
  wretch(`${FORMZ_API_URL}/data/graph`)
    .headers({
      "Access-Control-Allow-Origin": "*",
      crossDomain: true
    })
    .get();

export const getFormDataDateCount = ({dummyAuth}) =>
  wretch(`${FORMZ_API_URL}/data/count/graph`)
    .headers({
      "Access-Control-Allow-Origin": "*",
      crossDomain: true
    })
    .get();