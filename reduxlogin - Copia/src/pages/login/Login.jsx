import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { loginUser, reset } from "../../slices/authSlice";

function Login() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      login,
      senha,
    };
    dispatch(loginUser(user));
  };

  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="login"
          onChange={(e) => setLogin(e.target.value)}
          value={login || ""}
        />
        <input
          type="password"
          placeholder="senha"
          onChange={(e) => setSenha(e.target.value)}
          value={senha || ""}
        />
        <input type="submit" value="Entrar" />
      </form>

      <p>
        nao tem uma conta? <Link to="/register">Cadastrar</Link>
      </p>
    </div>
  );
}

export default Login;
