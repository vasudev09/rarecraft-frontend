import { get, post, put, del } from "./api";

export const BrandAPI = {
  getBySlug: (config = {}) => get(`/api/brand`, config),
  getList: () => get(`/api/brands`),
  add: (data: FormData) => post(`/api/brand`, data),
  update: (data: FormData, config = {}) => put(`/api/brand`, data, config),
  delete: (config = {}) => del(`/api/brand`, config),
};

export type createBrandData = {
  name: string;
  description: string;
  image: File;
};

export type updateBrandData = {
  name: string;
  description: string;
  image?: File;
};
