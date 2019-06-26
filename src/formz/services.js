import wretch from "wretch";
import { FORMZ_API_URL } from "../constants";

export const loadForm = ({ userAuth }) =>
  wretch(FORMZ_API_URL)
    .headers({
      "Access-Control-Allow-Origin": "*",
      crossDomain: true
    })
    .get();

export const updateForm = (id, data) =>
  wretch(FORMZ_API_URL + "/" + id)
    .headers({
      "Access-Control-Allow-Origin": "*",
      crossDomain: true,
      "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, HEAD"
    })
    .put({ name: data.name, description: data.description });

export const deleteForm = id =>
  wretch(FORMZ_API_URL + "/" + id)
    .headers({
      "Access-Control-Allow-Origin": "*",
      crossDomain: true,
      "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, HEAD"
    })
    .delete();

export const loadFormDataCount = formId =>
  wretch(FORMZ_API_URL + "/" + formId + "/data/count")
    .headers({
      "Access-Control-Allow-Origin": "*",
      crossDomain: true
    })
    .get();
