import { Formik } from "formik";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import {
  handleEditFormPessoa,
  handleUpdatePessoa,
  handleCreatePessoa,
} from "../../store/actions/PessoaAction";

function FormPessoa({ pessoa, dispatch, loading, isUpdate }) {
  const { idPessoa } = useParams();

  useEffect(() => {
    if (idPessoa) {
      handleEditFormPessoa(idPessoa, dispatch);
    }
  }, []);
  console.log(pessoa);

  if (loading) {
    return <div>Carregando...</div>;
  }
  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        nome: pessoa && isUpdate ? pessoa.nome : "",
        email: pessoa && isUpdate ? pessoa.email : "",
        cpf: pessoa && isUpdate ? pessoa.cpf : "",
        dataNascimento: pessoa && isUpdate ? pessoa.dataNascimento : "",
      }}
      onSubmit={(values) => {
        isUpdate
          ? handleUpdatePessoa(idPessoa, values)
          : handleCreatePessoa(values);
      }}
    >
      {(props) => (
        <form onSubmit={props.handleSubmit}>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.nome}
            name="nome"
            placeholder="Nome"
          />
          {props.errors.nome && <div id="feedback">{props.errors.nome}</div>}
          <label htmlFor="email">email</label>
          <input
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.email}
            name="email"
            placeholder="email"
          />
          {props.errors.email && <div id="feedback">{props.errors.email}</div>}
          <label htmlFor="dataNascimento">Data de Nascimento</label>
          <input
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.dataNascimento}
            name="dataNascimento"
            placeholder="Data de Nascimento"
          />
          {props.errors.dataNascimento && (
            <div id="feedback">{props.errors.dataNascimento}</div>
          )}
          <label htmlFor="cpf">CPF</label>
          <input
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.cpf}
            name="cpf"
            placeholder="CPF"
          />
          {props.errors.cpf && <div id="feedback">{props.errors.cpf}</div>}
          <button type="submit">{isUpdate ? "Atualizar" : "cadastrar"}</button>
        </form>
      )}
    </Formik>
  );
}

const mapStateToProps = (state) => ({
  pessoa: state.pessoaReducer.pessoa,
  loading: state.pessoaReducer.loading,
  isUpdate: state.pessoaReducer.isUpdate,
});

export default connect(mapStateToProps)(FormPessoa);
