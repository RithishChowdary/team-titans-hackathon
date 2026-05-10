import API from "./api";

export const syncUser = async (userData) => {

  return await API.post(
    "/users/sync",
    userData
  );
};