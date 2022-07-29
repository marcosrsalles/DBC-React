import { Formik } from "formik";
import { useContext } from "react";
import { PeopleContext } from "../../../context/PeopleContext";

function FormComponent(isUpdate, people) {
  const { handleAddPeople } = useContext(PeopleContext);
  return (
    <div>
      <Formik
        initialValues={{ name: people?.nome }}
        onSubmit={(values) => {
          handleAddPeople(values);
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <input
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.nome}
              name="nome"
            />
            <input
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.dataNascimento}
              name="dataNascimento"
            />
            <input
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.cpf}
              name="cpf"
            />
            <input
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.email}
              name="email"
            />
            {props.errors.name && <div id="feedback">{props.errors.name}</div>}
            <button>{isUpdate ? "Atualizar" : "Cadastrar"}</button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default FormComponent;
