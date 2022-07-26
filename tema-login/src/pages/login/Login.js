import { useContext } from "react";
import { LoginContext } from "./../../context/loginContext";
import { api } from "../../api";
import { Formik, Field, Form } from "formik";

function Login() {
  const { login, setLogin } = useContext(LoginContext);

  return (
    <div>
      <Formik
        initialValues={{ login: "", senha: "" }}
        onSubmit={(values) => {
          api
            .post("auth", {
              login: values.login,
              senha: values.senha,
            })
            .then(() => {
              setLogin({ isValidLogin: true });
              localStorage.setItem("login", values.login);
            })
            .catch(() => {
              setLogin({ isValidLogin: false });
            });
        }}
      >
        <Form>
          <label name="login">
            <Field id="login" type="text" name="login" />
          </label>
          <label>
            <Field id="senha" type="password" name="senha" />
          </label>
          <button type="submit">Entrar</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Login;
