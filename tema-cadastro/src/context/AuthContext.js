import { createContext, useState } from "react";
import { apiDbc } from "../api";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [logged, setLogged] = useState(false);
  const navigate = useNavigate();

  async function handleLogin(values) {
    try {
      const { data } = await apiDbc.post("/auth", values);
      localStorage.setItem("token", data);
      setLogged(true);
      navigate("/usuarios");
    } catch (error) {
      alert("Erro ao fazer login!");
    }
  }

  function handleLogout() {
    localStorage.removeItem("token");
    setLogged(false);
    navigate("/");
  }

  async function handleSignUp(values) {
    try {
      await apiDbc.post("/auth/create/", values);
      alert("Usuário criado com sucesso!");
      navigate("/");
    } catch (error) {
      alert("Erro ao fazer cadastro!");
    }
  }

  return (
    <AuthContext.Provider value={{ handleLogin, handleLogout, handleSignUp }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
