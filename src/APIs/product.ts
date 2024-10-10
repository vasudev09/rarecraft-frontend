import { get, post, put, del } from "./api";

export const ProductAPI = {
  getBySlug: (config = {}) => get(`/api/product`, config),
  getList: (config = {}) => get(`/api/products`, config),
  add: (data: FormData) => post(`/api/product`, data),
  update: (data: FormData, config = {}) => put(`/api/product`, data, config),
  delete: (config = {}) => del(`/api/product`, config),
};

export interface createProductData {
  name: string;
  description: string;
  content?: string;
  brand: number;
  category: number;
  price: number;
  discount: number;
  details: { [key: string]: string };
  images: File[];
}

export interface updateProductData {
  name: string;
  description: string;
  content?: string;
  price: number;
  discount: number;
  details: { [key: string]: string };
  images?: File[];
}
