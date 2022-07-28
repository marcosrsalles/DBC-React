import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/login/Login";
import Users from "./pages/users/Users";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Address from "./pages/address/Address";
import People from "./pages/people/People";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import NotFound from "./pages/notFound/NotFound";

function Routers() {
  const { auth } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Header />
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
          </>
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Routers;
