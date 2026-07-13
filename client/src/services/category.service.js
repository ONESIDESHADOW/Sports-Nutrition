import api from "./api";

export const getCategories = () =>
  api.get("/categories");

export const getCategory = (id) =>
  api.get(`/categories/${id}`);

export const createCategory = (formData) =>
  api.post("/categories", formData);

export const updateCategory = (id, formData) =>
  api.put(`/categories/${id}`, formData);

export const deleteCategory = (id) =>
  api.delete(`/categories/${id}`);