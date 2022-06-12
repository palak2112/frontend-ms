import requestMaker from "./networkHandler/requestMaker";

// Login API call
export const userLogin = (payload) => {
  const url = "/login/user";
  const params = {};
  return requestMaker(url, "post", { params, payload });
};

export const adminLogin = (payload) => {
  const url = "/login/admin";
  const params = {};
  return requestMaker(url, "post", { params, payload });
};

export const getUserDetail = () => {
  const url = "/login/user/me";
  const params = {};
  const payload = {};
  return requestMaker(url, "get", { params, payload });
};
