import React from "react";
//components
import { Link } from "react-router-dom";

//hooks
import { useState, useEffect } from "react";

function Register() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      name,
      password,
      confirmPassword,
    };
    console.log(user);
  };

  return (
    <div>
      <h1>Register</h1>
      <p>Cadastrese</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite seu login"
          onChange={(e) => setName(e.target.value)}
          value={name || ""}
        />
        <input
          type="password"
          placeholder="Digite sua senha"
          onChange={(e) => setPassword(e.target.value)}
          value={password || ""}
        />
        <input
          type="password"
          placeholder="confirme sua senha"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
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
