import { get, post } from "./api";

export const Auth = {
  login: (data: any) => post(`/api/login/`, data),
  validateUser: () => get(`/api/validate-user/`),
  logout: () => get(`/api/logout/`),
};
