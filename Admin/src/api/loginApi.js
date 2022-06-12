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

export const getAdminDetail = () => {
  const url = "/login/admin/me";
  const params = {};
  const payload = {};
  return requestMaker(url, "get", { params, payload });
};
