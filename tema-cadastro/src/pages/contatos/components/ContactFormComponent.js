import { useContext, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { PeopleContext } from "../../../context/PeopleContext";
import { postRequest, putRequest } from "./../../../api";
import {
  Button,
  Card,
  FormStyled,
  Input,
  Backgroud,
  CardButton,
} from "./ContactForm.styled";

function ContactFormComponent({ edit, idContato, idPessoa }) {
  const { contact, redirectToList } = useContext(PeopleContext);
  const contatos = contact && contact ? contact[0] : {};

  const handleClick = async (values) => {
    if (edit) {
      await handleEditContact(values);
    } else {
      await handleAddContact(values);
    }

    redirectToList();
  };

  const handleEditContact = async (values) => {
    debugger;
    const body = {
      ...values,
      idContato: contact.idContato,
      idPessoa: contact.idPessoa,
      tipo: contact.tipo,
      telefone: contact.telefone,
    };

    await putRequest(`/contato/${idContato}`, body);
  };

  const handleAddContact = async (values) => {
    const body = {
      ...values,
    };

    await postRequest(`/contato/${idPessoa}`, body);
  };
  return (
    <Backgroud>
      <Card>
        <h3>contatos</h3>

        <Formik
          enableReinitialize={true}
          initialValues={{
            tipoContato: contatos && contatos?.tipoContato,
            telefone: contatos && contatos?.telefone,
            descricao: contatos && contatos?.descricao,
          }}
          onSubmit={async (values) => {
            debugger;
            await handleClick(values);
          }}
        >
          {({ errors, touched, handleBlur, handleChange }) => {
            return (
              <FormStyled>
                <label htmlFor="telefone">Telefone</label>
                <Input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="telefone"
                  placeholder="telefone"
                />
                {errors.telefone && touched.telefone ? (
                  <erros>{errors.login}</erros>
                ) : null}
                <label>Tipo *</label>
                <Field required name="tipoContato" as="select">
                  <option value="COMERCIAL">Comercial</option>
                  <option value="RESIDENCIAL">Residencial</option>
                </Field>
                <label htmlFor="descricao">descricao</label>
                <Input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="descricao"
                  type="descricao"
                  placeholder="descricao"
                />
                {errors.descricao && touched.descricao ? (
                  <erros>{errors.descricao}</erros>
                ) : null}
                <CardButton>
                  <Button type="submit">Cadastrar Contato</Button>
                </CardButton>
              </FormStyled>
            );
          }}
        </Formik>
      </Card>
    </Backgroud>
  );
}

export default ContactFormComponent;
