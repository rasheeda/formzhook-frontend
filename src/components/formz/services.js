import wretch from "wretch";
import { FORMZ_API_URL } from "../../constants";
import {authHeader} from "../../models/authHeader";

export const loadForm = () =>
  wretch(FORMZ_API_URL)
    .headers(authHeader())
    .get();

export const updateForm = (id, data) =>
  wretch(FORMZ_API_URL + "/" + id)
    .headers(authHeader())
    .put({ name: data.name, description: data.description });

export const deleteForm = id =>
  wretch(FORMZ_API_URL + "/" + id)
    .headers(authHeader())
    .delete();

export const loadFormDataCount = formId =>
  wretch(FORMZ_API_URL + "/" + formId + "/data/count")
    .headers(authHeader())
    .get();

export const createForm = (name, description) =>
  wretch(FORMZ_API_URL)
    .headers(authHeader())
    .post({'name': name, 'description': description});
