import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/login/Login";
import Users from "./pages/users/Users";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Address from "./pages/address/Address";
import People from "./pages/people/People";

function Routers() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/usuarios" element={<Users />} />
          <Route path="/endereco" element={<Address />} />
          <Route path="/pessoa" element={<People />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default Routers;
