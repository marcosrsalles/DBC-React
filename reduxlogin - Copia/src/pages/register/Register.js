import React from "react";
//components
import { Link } from "react-router-dom";

//hooks
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//reducer
import { register, reset } from "../../slices/authSlice";

function Register() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    debugger;
    const user = {
      login,
      senha,
    };
    console.log(user);
    dispatch(register(user));
  };

  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  return (
    <div>
      <h1>Register</h1>
      <p>Cadastrese</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite seu login"
          onChange={(e) => setLogin(e.target.value)}
          value={login}
        />
        <input
          type="password"
          placeholder="Digite sua senha"
          onChange={(e) => setSenha(e.target.value)}
          value={senha}
        />
        <input type="submit" value="Cadastrar" />
      </form>
      <p>
        Já tem conta? <Link to="/login">Clique aqui</Link>{" "}
      </p>
    </div>
  );
}

export default Register;
