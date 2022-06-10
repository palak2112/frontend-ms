import axios from "axios";
import errorHandler from "./errorHandler";

const requestMaker = (
    baseQuery,
    method,
    requestData,
    additionalHeaders = {}
) => {
    let auth_token = "";
    try{
        auth_token = localStorage && localStorage.getItem("auth_token");
    }
    catch (error) {
        console.warn("No Auth Token found", error);
      }
    
    // Check for Internet connection
    if (!navigator.onLine) {
        throw new Error("No internet connection");
      }

    const headers = {
        ...additionalHeaders,
        // 'Content-type': 'application/json'
      };
    
      // http://localhost:5000
    let baseurl = "http://localhost:5000/api";
    baseQuery = `${baseurl}${baseQuery}`;
    const { params, payload } = requestData;

    // axios.defaults.headers.common['Content-type'] = `application/json`;

    // Embed auth token to header
    if (auth_token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${auth_token}`;
      } else {
        delete axios.defaults.headers.common["Authorization"];
      }

    let apiCall = axios(
        {
          method: method,
          url: baseQuery,
          params: params,
          data: payload,
        },
        { headers: headers }
      );

      return apiCall
      .then((response) => {
          console.log(response.data)
        return response;
      })
      .catch((error) => {
        const pe = errorHandler(error);
        console.error("Error in API call :: ", error,pe);
        throw error;
      });

};

export default requestMaker;
