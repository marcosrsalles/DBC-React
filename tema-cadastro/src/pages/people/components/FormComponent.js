import { Formik } from "formik";
import { useContext } from "react";
import { PeopleContext } from "../../../context/PeopleContext";
import MaskedInput from "react-text-mask";
import { maskCpf, maskDate, validCpf } from "../../../utils/mask";
import moment from "moment";
import { Card, Label } from "./Form.styled";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function FormComponent(isUpdate) {
  const { handleAddPeople, handleUpdate, people } = useContext(PeopleContext);

  const user = isUpdate.isUpdate && people ? people[0] : {};

  if (!user && isUpdate.isUpdate) {
    return;
  }

  const handleClick = (values) => {
    if (isUpdate.isUpdate) {
      handleUpdate(values);
      toast("Atualizado com sucesso");
      return;
    }
    handleAddPeople(values);
    toast("Criado com sucesso");
  };

  return (
    <Card>
      <Formik
        initialValues={{
          id: user ? user.idPessoa : "",
          nome: user ? user?.nome : "",
          dataNascimento: user
            ? moment(user?.dataNascimento, "YYYY-MM-DD").format("DD/MM/YYYY")
            : "",
          cpf: user ? user?.cpf : "",
          email: user ? user?.email : "",
        }}
        onSubmit={(values) => {
          if (!validCpf(values.cpf)) {
            toast("CPF Invalido");
            return false;
          }

          const newValues = {
            id: values.id,
            nome: values.nome,
            cpf: values.cpf.replace(/\D/g, ""),
            dataNascimento: moment(values.dataNascimento, "DD/MM/YYYY").format(
              "YYYY-MM-DD"
            ),
            email: values.email,
          };
          handleClick(newValues);
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <Label htmlFor="nome">Nome *</Label>
            <input
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.nome}
              name="nome"
              placeholder="Nome"
              required
            />
            <Label htmlFor="dataNascimento">Data de nascimento *</Label>
            <MaskedInput
              mask={maskDate}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.dataNascimento}
              name="dataNascimento"
              placeholder="Data de nascimento"
              required
            />
            <Label htmlFor="cpf">CPF *</Label>
            <MaskedInput
              mask={maskCpf}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.cpf}
              name="cpf"
              placeholder="CPF"
              required
            />
            <Label htmlFor="email">E-mail *</Label>
            <input
              type="email"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.email}
              name="email"
              placeholder="E-mail"
              required
            />
            {props.errors.name && <div id="feedback">{props.errors.name}</div>}
            <button type="submit">
              {isUpdate.isUpdate ? "Atualizar" : "Cadastrar"}
            </button>
          </form>
        )}
      </Formik>
      <ToastContainer />
    </Card>
  );
}

export default FormComponent;
