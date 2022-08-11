import apiDbc from "../../api";

export const handleLogin = async (values, dispatch, navigate) => {
  try {
    const { data } = await apiDbc.post("/auth", values);
    const logado = {
      type: "SET_LOGIN",
      token: data,
    };
    dispatch(logado);
    apiDbc.defaults.headers.common["Authorization"] = data;
    localStorage.setItem("token", data);
    navigate("/pessoa");
  } catch (error) {
    console.log(error);
  }
};

export const handleRegistrar = async (values) => {
  try {
    await apiDbc.post("/auth/create", values);
    alert("criou");
    window.location.href = "/login";
  } catch (error) {
    console.log(error);
  }
};

export const handleLogout = (dispatch) => {
  const logout = {
    type: "SET_LOGOUT",
    token: "",
  };
  localStorage.removeItem("token");
  window.location.href = "/login";

  dispatch(logout);
  window.location.reload();
};

export const isAuth = (dispatch) => {
  const token = localStorage.getItem("token");
  if (token) {
    apiDbc.defaults.headers.common["Authorization"] = token;
    const logado = {
      type: "SET_LOGIN",
      token: token,
    };
    dispatch(logado);
  }
};
