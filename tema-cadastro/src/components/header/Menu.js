import { Item } from "./Item";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Menu() {
  const { auth } = useContext(AuthContext);

  const { handleLogout } = useContext(AuthContext);
  return (
    <nav>
      <ul>
        {!auth ? (
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
      {auth && <button onClick={handleLogout}>Logout</button>}
    </nav>
  );
}

export default Menu;
