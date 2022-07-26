import { LoginContext } from "./../context/loginContext";
import { useContext } from "react";

function LogadoComponent() {
  const { login, setLogin } = useContext(LoginContext);

  return (
    // <LoginContext.Provider value={}>
    //   <div>teste</div>
    // </LoginContext.Provider>
    <div>estou logado</div>
  );
}

export default LogadoComponent;
