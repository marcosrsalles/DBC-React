import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Logado from "./pages/Logado";
import { LoginContext } from "./context/loginContext";
function Routers() {
  return (
    <BrowserRouter>
      <LoginContext>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Logado" element={<Logado />} />
        </Routes>
      </LoginContext>
    </BrowserRouter>
  );
}
export default Routers;
