import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
//components
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

//pages
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import Pessoa from "./pages/pessoa/Pessoa";
import NotFound from "./pages/notFound/NotFound";
import { isAuth } from "./store/actions/AuthAction";
import { connect } from "react-redux";
import FormPessoa from "./pages/pessoa/FormPessoa";
import Registrar from "./pages/registrar/Registrar";

function Routers({ auth, dispatch }) {
  useEffect(() => {
    isAuth(dispatch);
  }, []);

  // if (auth.isLoading) {
  //   return <div>Loading</div>;
  // }

  return (
    <BrowserRouter>
      {auth.isLogged ? <Navbar /> : ""}

      <Routes>
        {auth.isLogged ? (
          <>
            <Route path="/" element={<Dashboard />} />
            <Route path="/pessoa" element={<Pessoa />} />
            <Route path="/cadastrar-pessoa" element={<FormPessoa />} />
            <Route path="/editar-pessoa/:idPessoa" element={<FormPessoa />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/registrar" element={<Registrar />} />
          </>
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => ({
  auth: state.authReducer.auth,
});

export default connect(mapStateToProps)(Routers);
