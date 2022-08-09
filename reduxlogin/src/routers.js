import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

//pages
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import Pessoa from "./pages/pessoa/Pessoa";
import Register from "./pages/register/Register";

function Routers() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/pessoa" element={<Pessoa />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Routers;
