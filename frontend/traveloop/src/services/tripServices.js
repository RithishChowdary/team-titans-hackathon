import API from "./api";

export const createTrip = (tripData) =>
  API.post("/trips", tripData);

export const getUserTrips = (userId) =>
  API.get(`/trips/user/${userId}`);