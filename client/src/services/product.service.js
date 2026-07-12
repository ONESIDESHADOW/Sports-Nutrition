import axios from "./api";

export const getProducts = () =>
  axios.get("/products");

export const getProduct = (id) =>
  axios.get(`/products/${id}`);

export const createProduct = (data) =>
  axios.post("/products", data);

export const updateProduct = (id, data) =>
  axios.put(`/products/${id}`, data);

export const deleteProduct = (id) =>
  axios.delete(`/products/${id}`);