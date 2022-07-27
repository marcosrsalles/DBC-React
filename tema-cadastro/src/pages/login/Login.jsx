import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const SignupSchema = Yup.object().shape({
  login: Yup.string()
    .min(2, "Precisa de pelo menos 2 caracteres!")
    .max(50, "Maximo de 50 caracteres!")
    .required("Obrigatório!"),
  senha: Yup.string()
    .min(2, "Precisa de pelo menos 2 caracteres!!")
    .max(50, "Maximo de 50 caracteres!")
    .required("Obrigatório!"),
});

function Login() {
  const { handleLogin } = useContext(AuthContext);
  return (
    <div>
      <h1>Entre na sua conta!</h1>
      <Formik
        initialValues={{ login: "", senha: "" }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          handleLogin(values);
        }}
      >
        {({ errors, touched }) => {
          return (
            <Form>
              <Field name="login" placeholder="Login" />
              {errors.login && touched.login ? <div>{errors.login}</div> : null}
              <Field name="senha" type="password" placeholder="Senha" />
              {errors.senha && touched.senha ? <div>{errors.senha}</div> : null}
              <button type="submit">Entrar</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default Login;