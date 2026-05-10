import API from "./api";

export const addActivity = (
  stopId,
  activityData
) =>
  API.post(
    `/stops/${stopId}/activities`,
    activityData
  );