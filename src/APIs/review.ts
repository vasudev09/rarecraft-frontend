import { get, post } from "./api";

export const ReviewAPI = {
  add: (data: createReviewData) => post(`/api/review`, data),
  like: (config = {}) => get(`/api/review/like`, config),
};

export interface createReviewData {
  product_id: number;
  rating: number;
  review: string;
}
