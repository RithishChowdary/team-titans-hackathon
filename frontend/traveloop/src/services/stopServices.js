import axios from "axios";

const API =
  "http://localhost:8080/api";

export const addStop = (
  tripId,
  data
) => {

  return axios.post(
    `${API}/trips/${tripId}/stops`,
    data
  );
};

export const getStops = (
  tripId
) => {

  return axios.get(
    `${API}/trips/${tripId}/stops`
  );
};

export const deleteStop = (id) => {

  return axios.delete(
    `${API}/stops/${id}`
  );
};