import API from "./api";

export const syncUser = (userData) =>
  API.post("/users/sync", userData);