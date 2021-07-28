import Axios from "axios";

const URL = "http://mizona-dev.ingrapes.com/";

export default async (path, method, token, data) => {
  try {
    return await Axios({
      url: URL + path,
      method: method,
      data: data,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        return response?.data;
      })
      .catch((error) => {
        throw error;
      });
  } catch (err) {
    throw err;
  }
};
