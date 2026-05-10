import axios from "axios";

const API = "http://localhost:8080/api";

export const createTrip = (data) => {
  return axios.post(`${API}/trips`, data);
};

export const getUserTrips = (userId) => {
  return axios.get(
    `${API}/trips/user/${userId}`
  );
};

export const getTripById = (id) => {
  return axios.get(
    `${API}/trips/${id}`
  );
};