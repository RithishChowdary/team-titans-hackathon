import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api",
});

export const createTrip = (data) =>
  API.post("/trips", data);

export const getTrips = () =>
  API.get("/trips");

export const getTripById = (id) =>
  API.get(`/trips/${id}`);