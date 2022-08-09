import { api, requestConfig } from "../utils/config";

// rewgister user

const register = async (data) => {
  const config = requestConfig("POST", data);

  try {
    const res = await fetch(`${api}/auth/create`, config)
      .then((res) => res.json())
      .catch((err) => console.log(err));

    if (res) {
      localStorage.setItem("user", JSON.stringify(res));
    }
  } catch (error) {
    console.log(error);
  }
};

// login user
const loginUser = async (data) => {
  const config = requestConfig("POST", data);

  try {
    const { data } = await fetch(`${api}/auth`, config)
      .then((res) => {
        res.text();
      })
      .catch((err) => console.log(err));
    if (data) {
      localStorage.setItem("user", JSON.stringify(data));
    }
    return data;
  } catch (error) {
    console.log(error);
  }
};

const authService = {
  register,
  loginUser,
};

export default authService;
