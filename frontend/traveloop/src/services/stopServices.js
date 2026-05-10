import API from "./api";

export const addStop = async (
  tripId,
  stopData
) => {

  return await API.post(
    `/trips/${tripId}/stops`,
    stopData
  );
};

export const getStops = async (
  tripId
) => {

  return await API.get(
    `/trips/${tripId}/stops`
  );
};

export const deleteStop = async (
  stopId
) => {

  return await API.delete(
    `/stops/${stopId}`
  );
};