import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Routers from "./routers";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "./context/AuthContext";
import { PeopleProvider } from "./context/PeopleContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <AuthProvider>
      <PeopleProvider>
        <Routers />
      </PeopleProvider>
    </AuthProvider>
    <ToastContainer />
  </>
);

reportWebVitals();
