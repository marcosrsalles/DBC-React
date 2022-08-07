import { useContext } from "react";
import { PeopleContext } from "./../../../context/PeopleContext";
import { Card, Li, Button, CardButton } from "./PeopleDetail.styled.js";

function PeopleDetailComponent() {
  const {
    people,
    handleDeleteAddress,
    redirectToEditAddress,
    handleDeleteContato,
    redirectToEditContato,
  } = useContext(PeopleContext);
  const user = people && people[0];

  return (
    <Card>
      <ul>Detalhes</ul>
      <Li>Nome: {user?.nome}</Li>
      <Li>E-mail: {user?.email}</Li>
      <Li>Cpf: {user?.cpf}</Li>
      <Li>Data de nascimento: {user?.dataNascimento}</Li>
      <div>Endereços</div>
      {user &&
        user.enderecos.map((endereco) => {
          return (
            <div>
              <ul>
                <Li>Cidade: {endereco.cidade}</Li>
                <Li> Cep: {endereco.cep}</Li>
                <Li>Complemento: {endereco.complemento}</Li>
                <Li>Estado: {endereco.estado}</Li>
                <Li>Logradouro: {endereco.logradouro}</Li>
                <Li> Número: {endereco.numero}</Li>
                <Li>Pais: {endereco.pais}</Li>
                <Li>Tipo: {endereco.tipo}</Li>
              </ul>
              <CardButton>
                <Button
                  onClick={() => handleDeleteAddress(endereco.idEndereco)}
                >
                  Deletar endereço
                </Button>
                <Button
                  onClick={() => redirectToEditAddress(endereco.idEndereco)}
                >
                  Atualizar endereço
                </Button>
              </CardButton>
            </div>
          );
        })}
      <div>Contatos</div>
      {user &&
        user.contatos.map((contato) => {
          return (
            <div>
              <ul>
                <Li>Tipo: {contato.tipo}</Li>
                <Li>Telefone: {contato.telefone}</Li>
                <Li>Descrição: {contato.descricao}</Li>
              </ul>
              <CardButton>
                <Button onClick={() => handleDeleteContato(contato.idContato)}>
                  Deletar Contato
                </Button>
                <Button
                  onClick={() => redirectToEditContato(contato)}
                >
                  Atualizar Contato
                </Button>
              </CardButton>
            </div>
          );
        })}
    </Card>
  );
}

export default PeopleDetailComponent;

//exbir contatos aqui
