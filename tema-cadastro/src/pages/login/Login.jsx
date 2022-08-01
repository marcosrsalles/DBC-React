import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import {
  Button,
  Card,
  Input,
  Label,
  SignUp,
  TitleSignUp,
  ItemLink,
  Title,
  Small,
  TitleH3,
} from "./Login.Styled";

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
    <>
      <Card>
        <TitleH3>Dashboard Kit</TitleH3>
        <Title>Log In to Dashboard Kit</Title>
        <Small>Enter your email and password below</Small>
        <Formik
          initialValues={{ login: "", senha: "" }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            handleLogin(values);
          }}
        >
          {({ errors, touched, handleBlur, handleChange }) => {
            return (
              <Form>
                <Label htmlFor="login">Email</Label>
                <Input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="login"
                  placeholder="Login"
                />
                {errors.login && touched.login ? (
                  <div>{errors.login}</div>
                ) : null}
                <Label htmlFor="password">Senha</Label>
                <Input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="senha"
                  type="password"
                  placeholder="Senha"
                />
                {errors.senha && touched.senha ? (
                  <div>{errors.senha}</div>
                ) : null}
                <Button type="submit">Entrar</Button>
                <SignUp>
                  <TitleSignUp>Don’t have an account?</TitleSignUp>
                  <ItemLink to="/usuarios">Sign up</ItemLink>
                </SignUp>
              </Form>
            );
          }}
        </Formik>
      </Card>
    </>
  );
}

export default Login;
