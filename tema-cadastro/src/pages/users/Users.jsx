import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Card, Input, Button, FormStyled, Title } from "./User.syled";

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
              <Input name="login" placeholder="Digite seu nome" />
              {errors.login && touched.login ? <div>{errors.login}</div> : null}
              <Input
                name="senha"
                type="password"
                placeholder="Digite sua senha"
              />
              {errors.senha && touched.senha ? <div>{errors.senha}</div> : null}
              <div>
                <Button type="submit">Cadastrar</Button>
              </div>
            </FormStyled>
          );
        }}
      </Formik>
    </Card>
  );
}

export default Users;
