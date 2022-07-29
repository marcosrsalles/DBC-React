import { useNavigate } from "react-router-dom";
import { apiDbc } from "../../api";
import { useContext, useState } from "react";
import { PeopleContext } from "../../context/PeopleContext";

const FlatList = ({ array }) => {
  const { teste } = useContext(PeopleContext);
  const [list, setList] = useState();
  const navigate = useNavigate();

  const getList = async () => {
    try {
      const { data } = await apiDbc.get(
        "/pessoa?pagina=0&tamanhoDasPaginas=20"
      );
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async (idPessoa) => {
    try {
      await apiDbc.delete(`/pessoa/${idPessoa}`);
      await getList();
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async (idPessoa) => {
    navigate(`/editar-pessoa/${idPessoa}`);

    try {
      // const { data } = await apiDbc.put(`/pessoa/${idPessoa}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {array.map((item) => (
        <div key={item.idPessoa}>
          <p>{item.nome}</p>
          <p>{item.dataNascimento}</p>
          <p>
            {item.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")}
          </p>
          <p>{item.email}</p>
          <button onClick={() => handleDelete(item.idPessoa)}>Deletar</button>
          <button onClick={() => handleUpdate(item.idPessoa)}>Atualizar</button>
        </div>
      ))}
    </div>
  );
};

export default FlatList;
