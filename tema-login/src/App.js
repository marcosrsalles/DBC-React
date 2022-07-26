import "./App.css";
import LoginComponent from "./components/LoginComponent";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <LoginComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
