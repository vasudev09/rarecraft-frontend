import { get, post } from "./api";

export const Auth = {
  register: (data: RegisterData) => post(`/api/register`, data),
  login: (data: LoginData) => post(`/api/login`, data),
  logout: () => get(`/api/logout`),
  validateUser: () => get(`/api/validate-user`),
};

export interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

// export interface Config {
//   headers?: { [key: string]: string };
//   params?: { [key: string]: any };
// }
