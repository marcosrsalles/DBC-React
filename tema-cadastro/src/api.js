import axios from "axios";

const apiDbc = axios.create({
  baseURL: "https://dbc-pessoa-api.herokuapp.com",
});

const postRequest = async (path, body) => {
  try {
    const { data } = await apiDbc.post(path, body);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const deleteRequest = async (path) => {
  try {
    await apiDbc.delete(path);
  } catch (error) {
    console.log(error);
  }
};

const putRequest = async (path, body) => {
  try {
    await apiDbc.put(path, body);
  } catch (error) {
    console.log(error);
  }
};

const getRequest = async (path) => {
  try {
    const { data } = await apiDbc.get(path);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const setToken = (token) => {
  apiDbc.defaults.headers.common["Authorization"] = token;
};

export { postRequest, deleteRequest, putRequest, getRequest, setToken };
