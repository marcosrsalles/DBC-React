import { connect } from "react-redux";
import { useEffect } from "react";
import {
  getPessoa,
  handleEditPessoa,
  handleAddPessoa,
  handleDeletaPessoa,
  handleAddEndereco,
} from "../../store/actions/PessoaAction";
import { useNavigate } from "react-router-dom";
import { Card, RowHeader, Row, Button, ButtonCadastro } from "./Pessoa.styled";
import { Menu, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

function Pessoa({ pessoas, dispatch }) {
  const navigate = useNavigate();

  const setup = async () => {
    getPessoa(dispatch);
  };

  useEffect(() => {
    setup();
  }, []);
  console.log(pessoas);

  return (
    <Card>
      <ButtonCadastro onClick={() => handleAddPessoa(navigate)}>
        Cadastrar
      </ButtonCadastro>
      <h1>Lista de pessoas</h1>
      <RowHeader>
        <p>NOME</p>
        <p>DATA DE NASCIMENTO</p>
        <p>CPF</p>
        <p>E-MAIL</p>
      </RowHeader>

      {pessoas.map((pessoa) => {
        return (
          <Row key={pessoa.idPessoa}>
            <p>{pessoa.nome}</p>
            <p>{pessoa.dataNascimento}</p>
            <p>{pessoa.cpf}</p>
            <p>{pessoa.email}</p>

            <Menu menuButton={<Button>...</Button>} transition>
              <MenuItem onClick={() => handleDeletaPessoa(pessoa.idPessoa)}>
                Deletar
              </MenuItem>
              <MenuItem
                onClick={() => handleEditPessoa(pessoa.idPessoa, navigate)}
              >
                Editar
              </MenuItem>
              <MenuItem
                onClick={() => handleAddEndereco(pessoa.idPessoa, navigate)}
              >
                Add enreco
              </MenuItem>
            </Menu>
          </Row>
        );
      })}
    </Card>
  );
}

const mapStateToProps = (state) => ({
  pessoas: state.pessoaReducer.pessoas,
});

export default connect(mapStateToProps)(Pessoa);
