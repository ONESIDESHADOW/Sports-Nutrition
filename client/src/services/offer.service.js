import api from "./api";

export const getOffers = () =>
  api.get("/offers");

export const getOffer = (id) =>
  api.get(`/offers/${id}`);

export const createOffer = (formData) =>
  api.post("/offers", formData);

export const updateOffer = (id, formData) =>
  api.put(`/offers/${id}`, formData);

export const deleteOffer = (id) =>
  api.delete(`/offers/${id}`);