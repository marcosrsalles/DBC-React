import { createContext } from "react";

import { apiDbc } from "../api";

const PeopleContext = createContext();

const PeopleProvider = ({ children }) => {
  const handleAddPeople = async (values) => {
    try {
      const { data } = await apiDbc.post("/pessoa", values);
      window.location.href = "/pessoa";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PeopleContext.Provider value={{ handleAddPeople }}>
      {children}
    </PeopleContext.Provider>
  );
};

export { PeopleContext, PeopleProvider };
