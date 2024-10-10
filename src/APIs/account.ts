import { get, post } from "./api";

export const Account = {
  getProfile: () => get(`/api/profile`),
  updateProfile: (data: ProfileData) => post(`/api/profile`, data),
  myProducts: () => get(`/api/myproducts`),
  myBrands: () => get(`/api/mybrands`),
};

export interface ProfileData {
  username: string;
  password?: string;
  mobile?: number;
  image?: File;
}
