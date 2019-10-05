import wretch from "wretch";
import { FORMZ_API_URL } from "../utils/u_constants";
import {authHeader} from "../utils/u_authHeader";

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

export const generateApiKey = () =>
wretch(`${FORMZ_API_URL}/users/key/generate`)
    .headers(authHeader())
    .post();

export const getApiKey = () => 
wretch(`${FORMZ_API_URL}/users/key`)
    .headers(authHeader())
    .get();
