import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//hooks
import { useAuth } from "./hookes/useAuth";

//components
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

//pages
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import Pessoa from "./pages/pessoa/Pessoa";
import Register from "./pages/register/Register";

function Routers() {
  const { auth, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={auth ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={!auth ? <Login /> : <Navigate to="/" />}
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/pessoa"
          element={!auth ? <Pessoa /> : <Navigate to="/" />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Routers;
