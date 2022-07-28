import { createContext, useState, useEffect } from "react";
import { apiDbc } from "../api";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      apiDbc.defaults.headers.common["Authorization"] = token;
      setAuth(true);
    }
    setLoading(false);
  }, []);

  async function handleLogin(values) {
    try {
      const { data } = await apiDbc.post("/auth", values);
      localStorage.setItem("token", data);
      apiDbc.defaults.headers.common["Authorization"] = data;
      setAuth(true);
      window.location.href = "/endereco";
    } catch (error) {
      alert("Erro ao fazer login!");
    }
  }

  function handleLogout() {
    localStorage.removeItem("token");
    apiDbc.defaults.headers.common["Authorization"] = undefined;
    setAuth(false);
    window.location.href = "/";
  }

  async function handleSignUp(values) {
    try {
      await apiDbc.post("/auth/create/", values);
      alert("Usuário criado com sucesso!");
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
      value={{ handleLogin, handleLogout, handleSignUp, auth }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
