import { useContext } from "react";
import { PeopleContext } from "./../../../context/PeopleContext";
import { Container } from "../../../components/Container.styled";

function PeopleDetailComponent() {
  const { people, handleDeleteAddress, redirectToEditAddress } =
    useContext(PeopleContext);
  const user = people && people[0];

  return (
    <Container>
      <div>Detalhes</div>
      Nome: {user?.nome}
      E-mail: {user?.email}
      Cpf: {user?.cpf}
      Data de nascimento: {user?.dataNascimento}
      <div>Endereços</div>
      {user &&
        user.enderecos.map((endereco) => {
          return (
            <div>
              Cidade: {endereco.cidade}
              Cep: {endereco.cep}
              Complemento: {endereco.complemento}
              Estado: {endereco.estado}
              Logradouro: {endereco.logradouro}
              Número: {endereco.numero}
              Pais: {endereco.pais}
              Tipo: {endereco.tipo}
              <button onClick={() => handleDeleteAddress(endereco.idEndereco)}>
                Deletar endereço
              </button>
              <button
                onClick={() => redirectToEditAddress(endereco.idEndereco)}
              >
                Atualizar endereço
              </button>
            </div>
          );
        })}
    </Container>
  );
}

export default PeopleDetailComponent;
