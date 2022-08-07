import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { postRequest, deleteRequest, putRequest, getRequest } from "../api";

const PeopleContext = createContext();

const PeopleProvider = ({ children }) => {
  const [people, setPeople] = useState([]);
  const [address, setAddress] = useState([]);
  const [contact, setContact] = useState([]);

  const getPeopleById = async (id) => {
    const data = await getRequest(`/pessoa/lista-completa?idPessoa=${id}`);
    setPeople(data);
  };

  const getPeople = async () => {
    const data = await getRequest("/pessoa?pagina=0&tamanhoDasPaginas=20");
    setPeople(data.content);
  };

  const getAddressById = async (idContato) => {
    const data = await getRequest(`/contato/${idContato}`);
    setAddress(data);
  };

  const getContactById = async (idContato) => {
    const data = await getRequest(`/contato/${idContato}`);
    setContact(data);
  };

  const handleAddPeople = async (values) => {
    await postRequest("/pessoa", values);
    toast.success("Usuario criado com sucesso");
    window.location.href = "/pessoa";
  };

  const handleDelete = async (idPessoa) => {
    await deleteRequest(`/pessoa/${idPessoa}`);
    getPeople();
  };

  const handleDeleteContato = async (idContato) => {
    await deleteRequest(`/contato/${idContato}`);
    redirectToList();
  };

  const handleUpdate = async (people) => {
    await putRequest(`/pessoa/${people.id}`, people);
    window.location.href = "/pessoa";
  };

  const handleUpdateContact = async (idContato) => {
    await putRequest(`/contato/${idContato}`, contact);
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

  const redirectToAddContact = (idPessoa) => {
    window.location.href = `/adicionar-contato/${idPessoa}`;
  };

  const redirectToEditContato = async (contato) => {
    setContact(contato);
    window.location.href = `/editar-contato/${contato.idContato}`;
  };

  const redirectToList = () => {
    window.location.href = `/pessoa`;
  };

  return (
    <PeopleContext.Provider
      value={{
        handleAddPeople,
        handleDelete,
        handleUpdate,
        redirecToUpdate,
        people,
        address,
        contact,
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
        redirectToAddContact,
        getContactById,
        handleDeleteContato,
        handleUpdateContact,
        redirectToEditContato,
      }}
    >
      {children}
    </PeopleContext.Provider>
  );
};

export { PeopleContext, PeopleProvider };
