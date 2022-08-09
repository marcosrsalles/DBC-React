import { useFormik } from "formik";
import apiDbc from "../../api";
import { connect } from "react-redux";

function Login({ auth, dispatch }) {
  const handleLogin = async (values) => {
    try {
      const { data } = await apiDbc.post("/auth", values);
      const logado = {
        type: "SET_LOGIN",
        token: data,
      };
      dispatch(logado);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(auth);

  const formik = useFormik({
    initialValues: {
      login: "",
      senha: "",
    },
    onSubmit: (values) => {
      handleLogin(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="login">Login</label>
      <input
        id="login"
        name="login"
        type="text"
        placeholder="Digite seu login"
        onChange={formik.handleChange}
        value={formik.values.login}
      />
      <label htmlFor="senha">Senha</label>
      <input
        id="senha"
        name="senha"
        type="password"
        placeholder="Digite sua senha"
        onChange={formik.handleChange}
        value={formik.values.senha}
      />

      <button type="submit">Entrar</button>
    </form>
  );
}

const mapStateToProps = (state) => ({
  auth: state.authReducer.auth,
});

export default connect(mapStateToProps)(Login);
