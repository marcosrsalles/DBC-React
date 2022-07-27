import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import axios from "axios";

function Address() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, []);

  async function onBlurCep(event, setFieldValue) {
    let { value } = event.target;
    const cep = value?.replace(/[^0-9]/g, "");
    if (cep.length !== 8) {
      return;
    }

    try {
      const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      console.log(data);
      setFieldValue("bairro", data.logradouro);
      setFieldValue("cidade", data.localidade);
      setFieldValue("logradouro", data.logradouro);
      setFieldValue("uf", data.uf);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Entre na sua conta!</h1>
      <Formik
        initialValues={{
          cep: "",
          logradouro: "",
          numero: "",
          bairro: "",
          cidade: "",
          uf: "",
        }}
        onSubmit={(values) => {
          onBlurCep(values);
        }}
        setFieldValue={(field, value) => {
          console.log(field, value);
        }}
      >
        {({ setFieldValue }) => {
          return (
            <Form>
              <>
                <label>CEP</label>
                <Field
                  name="cep"
                  placeholder="Digite seu CEP"
                  onBlur={(event) => onBlurCep(event, setFieldValue)}
                />
              </>
              <>
                <label>Logradouro</label>
                <Field name="logradouro" />
              </>
              <>
                <label>Número</label>
                <Field name="cumero" placeholder="Digite o numero" />
              </>
              <>
                <label>Complemento</label>
                <Field name="complemento" />
              </>
              <>
                <label>Bairro</label>
                <Field name="bairro" />
              </>
              <>
                <label>Cidade</label>
                <Field name="cidade" />
              </>
              <>
                <label>Estado</label>
                <Field name="uf" />
              </>
              <button type="submit">Cadastrar</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default Address;
