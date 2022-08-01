import { useContext } from "react";
import { Formik, Form, Field } from "formik";
import { postRequest, putRequest } from "./../../../api";
import axios from "axios";
import { PeopleContext } from "../../../context/PeopleContext";
import { Card, Button, Title } from "./Address.styled";

function AddressFormComponent({ edit, idEndereco, idPessoa }) {
  const { address, redirectToList } = useContext(PeopleContext);

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
      setFieldValue("estado", data.uf);
    } catch (error) {
      console.log(error);
    }
  }

  const handleClick = async (values) => {
    if (edit) {
      await handleEditAddress(values);
    } else {
      await handleAddAddress(values);
    }

    redirectToList();
  };

  const handleEditAddress = async (values) => {
    const body = {
      ...values,
      bairro: address.bairro, //Bairro não está retornando da api
      idEndereco: address.idEndereco,
      idPessoa: address.idPessoa,
      cep: values.cep.replace("-", ""),
    };

    await putRequest(`/endereco/${idEndereco}`, body);
  };

  const handleAddAddress = async (values) => {
    const body = {
      ...values,
      cep: values.cep.replace("-", ""),
    };

    await postRequest(`/endereco/{idPessoa}?idPessoa=${idPessoa}`, body);
  };
  return (
    <Card>
      <Title>Informe os dados do seu endereço</Title>
      <Formik
        enableReinitialize={true}
        initialValues={{
          cep: address?.cep,
          logradouro: address?.logradouro,
          numero: address?.numero,
          bairro: address?.bairro,
          cidade: address?.cidade,
          estado: address?.estado,
          pais: address?.pais,
          complemento: address?.complemento,
          tipo: address?.tipo,
        }}
        onSubmit={async (values) => {
          await handleClick(values);
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
                <Field name="numero" placeholder="Digite o numero" />
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
                <Field name="estado" />
              </>
              <>
                <label>Pais</label>
                <Field name="pais" />
              </>
              <>
                <label>Tipo</label>
                <Field name="tipo" as="select">
                  <option value="COMERCIAL">Comercial</option>
                  <option value="RESIDENCIAL">Residencial</option>
                </Field>
              </>
              <Button type="submit">Cadastrar</Button>
            </Form>
          );
        }}
      </Formik>
    </Card>
  );
}

export default AddressFormComponent;
