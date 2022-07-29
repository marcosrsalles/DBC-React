import { useEffect, useState } from "react";
import { apiDbc } from "../../api";
import { useNavigate } from "react-router-dom";
import FlatList from "../../components/flatList/flatList";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function People() {
  const { setLoading } = useContext(AuthContext);
  const [people, setPeople] = useState([]);
  const navigate = useNavigate();

  const setup = async () => {
    setLoading(false);
    try {
      const { data } = await apiDbc.get(
        "/pessoa?pagina=0&tamanhoDasPaginas=20"
      );
      setPeople(data.content);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    setup();
  }, []);

  const handleCreate = () => {
    navigate("/criar-pessoa");
  };

  return (
    <div>
      <button onClick={handleCreate}>Cadastrar</button>
      <h1>Lista de pessoas</h1>
      <FlatList array={people} />
    </div>
  );
}

export default People;
