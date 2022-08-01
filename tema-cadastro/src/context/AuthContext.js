import { createContext, useState, useEffect } from "react";
import { setToken, postRequest } from "../api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
      setAuth(true);
    }
    setLoading(false);
  }, []);

  async function handleLogin(values) {
    try {
      const data = await postRequest("/auth", values);
      localStorage.setItem("token", data);
      setToken(data);
      setAuth(true);
      window.location.href = "/endereco";
    } catch (error) {
      alert("Erro ao fazer login!");
    }
  }

  function handleLogout() {
    localStorage.removeItem("token");
    setToken(undefined);
    setAuth(false);
    window.location.href = "/";
  }

  async function handleSignUp(values) {
    try {
      await postRequest("/auth/create/", values);
      toast("Usuário criado com sucesso!");
      <ToastContainer />;
      window.location.href = "/";
    } catch (error) {
      alert("Erro ao fazer cadastro!");
    }
  }

  if (loading) {
    return <h1>Carregando</h1>;
  }

  return (
    <AuthContext.Provider
      value={{ handleLogin, handleLogout, handleSignUp, auth, setLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
