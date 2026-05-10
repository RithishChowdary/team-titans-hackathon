import API from "./api";

export const createTrip = async (
  tripData
) => {

  return await API.post(
    "/trips",
    tripData
  );
};

export const getUserTrips = async (
  userId
) => {

  return await API.get(
    `/trips/user/${userId}`
  );
};

export const getTripById = async (
  tripId
) => {

  return await API.get(
    `/trips/${tripId}`
  );
};