export const api = "https://dbc-pessoa-api.herokuapp.com";

export const requestConfig = (method, data, token = null) => {
  let config;
  if (method === "DELETE" || data === null) {
    config = {
      method,
      headers: {},
    };
  } else {
    config = {
      method,

      body: JSON.stringify(data),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    debugger;
  }

  if (token) {
    api.defaults.headers.common["Authorization"] = token;
    // config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};
