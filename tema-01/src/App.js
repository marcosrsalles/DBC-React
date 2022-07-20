import "./App.css";
import PageHome from "./components/PagHomeComponent";
import PageSobre from "./components/PageSobre";
import PageContato from "./components/PageContatoComponent";

function App() {
  return (
    <div>
      {/* Descomentar a pagina que quer ver */}
      {/* <PageHome /> */}
      {/* <PageSobre /> */}
      <PageContato />
    </div>
  );
}

export default App;
