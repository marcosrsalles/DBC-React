import { createContext, useState } from "react";
import { postRequest, deleteRequest, putRequest, getRequest } from "../api";

const PeopleContext = createContext();

const PeopleProvider = ({ children }) => {
  const [people, setPeople] = useState([]);
  const [address, setAddress] = useState([]);

  const getPeopleById = async (id) => {
    const data = await getRequest(`/pessoa/lista-completa?idPessoa=${id}`);
    setPeople(data);
  };

  const getPeople = async () => {
    const data = await getRequest("/pessoa?pagina=0&tamanhoDasPaginas=20");
    setPeople(data.content);
  };

  const getAddressById = async (idEndereco) => {
    const data = await getRequest(`/endereco/${idEndereco}`);
    setAddress(data);
  };

  const handleAddPeople = async (values) => {
    await postRequest("/pessoa", values);
    window.location.href = "/pessoa";
  };

  const handleDelete = async (idPessoa) => {
    await deleteRequest(`/pessoa/${idPessoa}`);
    getPeople();
  };

  const handleUpdate = async (people) => {
    await putRequest(`/pessoa/${people.id}`, people);
    window.location.href = "/pessoa";
  };

  const handleDetails = async (idPessoa) => {
    const data = await getRequest(
      `/pessoa/lista-completa?idPessoa=${idPessoa}`
    );
    setPeople(data);
  };

  const handleDeleteAddress = async (idEndereco) => {
    await deleteRequest(`/endereco/${idEndereco}`);
    redirectToList();
  };

  const handleUpdateAddress = async (idEndereco, endereco) => {
    await putRequest(`/endereco/${idEndereco}`, endereco);
  };

  const redirecToUpdate = (idPessoa) => {
    window.location.href = `/editar-pessoa/${idPessoa}`;
  };

  const redirectToDetails = (idPessoa) => {
    window.location.href = `/detalhar-pessoa/${idPessoa}`;
  };

  const redirectToAddAddress = (idPessoa) => {
    window.location.href = `/adicionar-endereco/${idPessoa}`;
  };

  const redirectToEditAddress = (idEndereco) => {
    window.location.href = `/editar-endereco/${idEndereco}`;
  };

  const redirectToList = () =>{
    window.location.href = `/pessoa`;
  }

  return (
    <PeopleContext.Provider
      value={{
        handleAddPeople,
        handleDelete,
        handleUpdate,
        redirecToUpdate,
        people,
        address,
        getPeople,
        getPeopleById,
        redirectToDetails,
        handleDetails,
        redirectToAddAddress,
        handleDeleteAddress,
        handleUpdateAddress,
        redirectToEditAddress,
        getAddressById,
        redirectToList,
      }}
    >
      {children}
    </PeopleContext.Provider>
  );
};

export { PeopleContext, PeopleProvider };
