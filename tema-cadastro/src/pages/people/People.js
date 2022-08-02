import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FlatList from "../../components/flatList/flatList";
import { useContext } from "react";
import { PeopleContext } from "../../context/PeopleContext";
import { Container } from "../../components/Container.styled";
import { Button, CardButton } from "./People.styled";
import { ToastContainer } from "react-toastify";

function People() {
  const { getPeople, people } = useContext(PeopleContext);

  const navigate = useNavigate();

  const setup = async () => {
    getPeople();
  };

  useEffect(() => {
    setup();
  }, []);

  const handleCreate = () => {
    navigate("/criar-pessoa");
  };

  return (
    <Container>
      <CardButton>
        <Button onClick={handleCreate}>Cadastrar</Button>
      </CardButton>

      <FlatList array={people} />
      <ToastContainer />
    </Container>
  );
}

export default People;
