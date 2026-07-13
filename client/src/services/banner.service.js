import api from "./api";

export const getBanners = () =>
  api.get("/banners");

export const getBanner = (id) =>
  api.get(`/banners/${id}`);

export const createBanner = (formData) =>
  api.post("/banners", formData);

export const updateBanner = (id, formData) =>
  api.put(`/banners/${id}`, formData);

export const deleteBanner = (id) =>
  api.delete(`/banners/${id}`);