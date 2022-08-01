import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import { PeopleContext } from "./../../context/PeopleContext";
import AddressFormComponent from "./components/AddressFormComponent";
import { Container } from "../../components/Container.styled";

function Address({ edit }) {
  const { getAddressById, address } = useContext(PeopleContext);

  const { id } = useParams();

  const setup = async () => {
    if (id) {
      getAddressById(id);
    }
  };

  useEffect(() => {
    setup();
  }, []);

  return (
    <Container>
      <AddressFormComponent edit={edit} idPessoa={id} idEndereco={id} />
    </Container>
  );
}

export default Address;
