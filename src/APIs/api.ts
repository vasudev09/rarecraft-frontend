import axios from "axios";

let config = {
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true,
  headers: { "cache-control": "no-cache" },
};

const apiClient = axios.create(config);

export function get(url: string, config = {}) {
  return apiClient.request({
    url,
    method: "get",
    ...config,
  });
}

export function post(url: string, data = {}, config = {}) {
  return apiClient.request({
    url,
    method: "post",
    data,
    ...config,
  });
}

export function put(url: string, data = {}, config = {}) {
  return apiClient.request({
    url,
    method: "put",
    data,
    ...config,
  });
}

export function del(url: string, config = {}) {
  return apiClient.request({
    url,
    method: "delete",
    ...config,
  });
}
