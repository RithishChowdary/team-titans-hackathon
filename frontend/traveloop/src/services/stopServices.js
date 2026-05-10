import API from "./api";

export const addStop = (
  tripId,
  stopData
) =>
  API.post(
    `/trips/${tripId}/stops`,
    stopData
  );