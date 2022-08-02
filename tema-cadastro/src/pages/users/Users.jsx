import { Formik } from "formik";
import * as Yup from "yup";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Card, Input, Button, FormStyled, Title, Erros } from "./User.syled";
import { Background } from "../login/Login.Styled";

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

function Users() {
  const { handleSignUp } = useContext(AuthContext);
  return (
    <Background>
      <Card>
        <Title>Crie sua conta</Title>
        <Formik
          initialValues={{ login: "", senha: "" }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            handleSignUp(values);
          }}
        >
          {({ errors, touched }) => {
            return (
              <FormStyled>
                <Input required name="login" placeholder="Digite seu nome" />
                {errors.login && touched.login ? (
                  <Erros>{errors.login}</Erros>
                ) : null}
                <Input
                  name="senha"
                  type="password"
                  required
                  placeholder="Digite sua senha"
                />
                {errors.senha && touched.senha ? (
                  <Erros>{errors.senha}</Erros>
                ) : null}
                <div>
                  <Button type="submit">Cadastrar</Button>
                </div>
              </FormStyled>
            );
          }}
        </Formik>
      </Card>
    </Background>
  );
}

export default Users;
