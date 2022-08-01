import { useContext } from "react";
import { PeopleContext } from "../../context/PeopleContext";
import { Card, Row, RowHeader, Button, Backgroud } from "./FlatList.styled";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

const FlatList = ({ array }) => {
  const {
    handleDelete,
    redirecToUpdate,
    redirectToDetails,
    redirectToAddAddress,
  } = useContext(PeopleContext);

  return (
    <Backgroud>
      <Card>
        <h1>Lista de pessoas</h1>
        <RowHeader>
          <p>NOME</p>
          <p>DATA DE NASCIMENTO</p>
          <p>CPF</p>
          <p>E-MAIL</p>
        </RowHeader>
        {array.map((item) => (
          <Row key={item.idPessoa}>
            <p>{item.nome}</p>
            <p>{item.dataNascimento}</p>
            <p>
              {item.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")}
            </p>
            <p>{item.email}</p>

            <Menu menuButton={<Button>...</Button>} transition>
              <MenuItem onClick={() => handleDelete(item.idPessoa)}>
                Deletar
              </MenuItem>
              <MenuItem onClick={() => redirecToUpdate(item.idPessoa)}>
                Atualizar
              </MenuItem>
              <MenuItem onClick={() => redirectToDetails(item.idPessoa)}>
                Detalhar
              </MenuItem>
              <MenuItem onClick={() => redirectToAddAddress(item.idPessoa)}>
                Cadastrar endereço
              </MenuItem>
            </Menu>
          </Row>
        ))}
      </Card>
    </Backgroud>
  );
};

export default FlatList;
