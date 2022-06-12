import requestMaker from "./networkHandler/requestMaker";

// CRUD API call
export const fetchAllRequests = (params) => {
  const url = "/request/";
  // const params = {};
  const payload = {};
  return requestMaker(url, "get", { params, payload });
};

export const fetchRequestById = (requestId) => {
  const url = "/request/" + String(requestId);
  const params = {};
  const payload = {};
  return requestMaker(url, "get", { params, payload });
};

export const createRequest = (payload) => {
  const url = "/request/";
  const params = {};
  return requestMaker(url, "post", { params, payload });
};

export const updateRequest = (payload, requestId) => {
  const url = "/request/" + String(requestId);
  const params = {};
  return requestMaker(url, "patch", { params, payload });
};

export const deleteRequest = (requestId) => {
  const url = "/request/" + String(requestId);
  const params = {};
  const payload = {};
  return requestMaker(url, "delete", { params, payload });
};

// Fetch Documents by request ID
export const getDocumentsByRequestId = (requestId) => {
  const url = "/request/" + String(requestId) + "/document";
  const params = {};
  const payload = {};
  return requestMaker(url, "get", { params, payload });
};
