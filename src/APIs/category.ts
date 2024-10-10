import { get } from "./api";

export const CategoryAPI = {
  getList: () => get(`/api/categories`),
};
