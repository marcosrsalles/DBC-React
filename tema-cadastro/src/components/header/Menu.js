import { Item } from "./Item";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, []);

  const { handleLogout } = useContext(AuthContext);
  return (
    <nav>
      <ul>
        {!token ? (
          <>
            <Item name="Home" url="/" />
            <Item name="Cadastrar Usuario" url="/usuarios" />
          </>
        ) : (
          <>
            <Item name="Endereço" url="/endereco" />
            <Item name="Pessoa" url="/pessoa" />
          </>
        )}
      </ul>
      {token && <button onClick={handleLogout}>Logout</button>}
    </nav>
  );
}

export default Menu;
