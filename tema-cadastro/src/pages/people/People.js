import { useEffect, useState } from "react";
import { Formik, Field, Form } from "formik";
import MaskedInput from "react-input-mask";
import * as Yup from "yup";
import { apiDbc } from "../../api";
import moment from "moment";
import { date } from "yup";

function People() {
  const [pessoas, setPessoas] = useState([]);
  const [btnAddVisible, setBtnAddVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [edit, setEdit] = useState({});
  // const [dataNascimento, setDataNascimento] = useState("");
  // const [cpf, setCpf] = useState("");
  // const [email, setEmail] = useState("");

  let validationSchema = Yup.object({
    nome: Yup.string().required("Campo obrigatório"),
    dataNascimento: date().required("A data de nascimento é obrigatória"),
    cpf: Yup.string().required("Cpf é obrigatório"),
    email: Yup.string().email("Email inválido").required("Required"),
  });

  const phoneNumberMask = [
    "(",
    /[1-9]/,
    /\d/,
    /\d/,
    ")",
    " ",
    /\d/,
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
    /\d/,
    /\d/,
  ];

  async function setup() {
    try {
      const { data } = await apiDbc.get(
        "/pessoa?pagina=0&tamanhoDasPaginas=20"
      );
      setPessoas(data.content);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    setup();
  }, []);

  async function handleDelete(id) {
    try {
      const response = await apiDbc.delete(`/pessoa/${id}`);
      await setup();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleEdit(id, value) {
    debugger;

    let nome = value.nome;
    let cpf = value.cpf;
    let dataNascimento = value.dataNascimento;
    let email = value.email;

    const User = {
      nome,
      cpf,
      dataNascimento,
      email,
    };
    console.log(User);
    setEdit(User);

    try {
      const { data } = await apiDbc.put(`/pessoa/${id}`, value);
      await setup();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleAdd(values) {
    try {
      const { data } = await apiDbc.post("/pessoa", values);

      await setup();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleShowInput() {
    setBtnAddVisible(!btnAddVisible);
    await setup();
  }
  return (
    <div>
      <h1>Lista de pessoas</h1>
      <button onClick={() => handleAdd()}>Adicionar</button>

      {pessoas.map((item) => (
        <div key={item.idPessoa}>
          <p>{item.nome}</p>
          <p>{moment(item.dataNascimento).format("DD/MM/YYYY")}</p>
          <p>
            {item.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")}
          </p>
          <p>{item.email}</p>
          <button onClick={() => handleDelete(item.idPessoa)}>Deletar</button>
          <button onClick={() => handleEdit(item.idPessoa, item)}>
            Editar
          </button>
        </div>
      ))}

      <div>
        <Formik
          initialValues={{
            nome: "",
            dataNascimento: "",
            cpf: "",
            email: "",
          }}
          validationSchema={validationSchema}
          onSubmit={async (values) => {
            await handleAdd(values);
          }}
        >
          {({ errors, touched }) => (
            <Form
              onChange={(event) => {
                setInputValue(event.target.value);
              }}
            >
              <label
                htmlFor="nome"
                style={{ display: btnAddVisible ? "block" : "none" }}
              >
                Nome
              </label>
              <Field
                style={{ display: btnAddVisible ? "block" : "none" }}
                id="nome"
                name="nome"
                placeholder="Jane"
                value={edit?.nome ? edit?.nome : undefined}
              />
              {errors.nome && touched.nome ? <div>{errors.nome}</div> : null}
              <label
                style={{ display: btnAddVisible ? "block" : "none" }}
                htmlFor="dataNascimento"
              >
                Data de nascimento
              </label>
              <Field
                value={edit?.dataNascimento ? edit?.dataNascimento : null}
                name="dataNascimento"
                placeholder="Doe"
                render={({ field }) => (
                  <MaskedInput
                    {...field}
                    mask={phoneNumberMask}
                    id="dataNascimento"
                    type="text"
                    style={{ display: btnAddVisible ? "block" : "none" }}
                  />
                )}
              />
              {errors.dataNascimento && touched.dataNascimento ? (
                <div>{errors.dataNascimento}</div>
              ) : null}

              <label
                style={{ display: btnAddVisible ? "block" : "none" }}
                htmlFor="cpf"
              >
                CPF
              </label>
              <Field
                value={edit?.cpf ? edit?.cpf : undefined}
                style={{ display: btnAddVisible ? "block" : "none" }}
                id="cpf"
                name="cpf"
                placeholder="Doe"
              />
              {errors.cpf && touched.cpf ? <div>{errors.cpf}</div> : null}

              <label
                style={{ display: btnAddVisible ? "block" : "none" }}
                htmlFor="email"
              >
                Email
              </label>
              <Field
                value={edit?.email ? edit?.email : undefined}
                style={{ display: btnAddVisible ? "block" : "none" }}
                id="email"
                name="email"
                placeholder="Doe"
              />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
              <button
                type="submit"
                style={{ display: btnAddVisible ? "block" : "none" }}
              >
                Adicionar esta pessoa
              </button>
              <button onClick={handleShowInput}>Adicionar pessoa</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default People;
