import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Users from "./pages/users/Users";
import Header from "./components/header/Header";
import Address from "./pages/address/Address";
import People from "./pages/people/People";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import NotFound from "./pages/notFound/NotFound";
import PeopleForm from "./pages/people/PeopleForm";
import PeopleDetail from "./pages/people/PeopleDetail";
import Contacts from "./pages/contatos/Contacts";
import ContactFormComponent from "./pages/contatos/components/ContactFormComponent";

function Routers() {
  const { auth } = useContext(AuthContext);
  return (
    <BrowserRouter>
      {auth ? <Header /> : ""}
      <Routes>
        {!auth ? (
          <>
            <Route exact path="/" element={<Login />} />
            <Route path="/usuarios" element={<Users />} />
          </>
        ) : (
          <>
            <Route path="/endereco" element={<Address />} />
            <Route path="/pessoa" element={<People />} />
            <Route path="/contatos" element={<Contacts />} />
            <Route path="/criar-pessoa" element={<PeopleForm />} />
            <Route path="/editar-pessoa/:id" element={<PeopleForm />} />
            <Route path="/detalhar-pessoa/:id" element={<PeopleDetail />} />
            <Route path="/adicionar-endereco/:id" element={<Address />} />
            <Route
              path="/editar-endereco/:id"
              element={<Address edit={true} />}
            />
            <Route path="/adicionar-contato/:id" element={<Contacts />} />
            <Route
              path="/editar-contato/:id"
              element={<Contacts edit={true} />}
            />
          </>
        )}

        {<Route path="*" element={<NotFound />} />}
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;

//editar-contato
