import { instance } from "dataAccess";
import { ENDPOINTS } from "utils/endpoints/endpoint-constant";

const { SIGN_IN } = ENDPOINTS;

export const postAuthData = (email, password) => {
  const response = instance.post(SIGN_IN, { email, password });
  return response;
};
