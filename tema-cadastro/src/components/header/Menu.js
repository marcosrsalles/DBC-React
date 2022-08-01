import { Item } from "./Item";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Button, Nav } from "./Menu.styled";
import pessoas from "./Vector.svg";
import contatos from "./Contacts.svg";
function Menu() {
  const { auth } = useContext(AuthContext);

  const { handleLogout } = useContext(AuthContext);
  return (
    <Nav>
      <ul>
        {!auth ? (
          <>
            <Item name="Home" url="/" />
            <Item name="Cadastrar Usuario" url="/usuarios" />
          </>
        ) : (
          <>
            <Item
              img={<img src={pessoas} alt="" srcset="" />}
              name="Endereço"
              url="/endereco"
            />
            <Item
              img={<img src={contatos} alt="" srcset="" />}
              name="Pessoa"
              url="/pessoa"
            />
          </>
        )}
      </ul>
      {auth && <Button onClick={handleLogout}>Logout</Button>}
    </Nav>
  );
}

export default Menu;
