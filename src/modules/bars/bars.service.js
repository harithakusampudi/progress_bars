import request from "../../utils/request";

const API = "http://pb-api.herokuapp.com/bars";

export const getBarsDataService = async () => {
  const options = {
    url: API,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  return await request(options);
};
