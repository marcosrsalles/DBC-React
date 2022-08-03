import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PeopleContext } from "./../../context/PeopleContext";
import ContactFormComponent from "./components/ContactFormComponent";

function Contacts({ edit }) {
  const { getContactById, contact } = useContext(PeopleContext);
  const [isUpdate, setIsUpdate] = useState(false);

  const { id } = useParams();

  const setup = () => {
    if (id) {
      getContactById(id);
    }
  };

  useEffect(() => {
    setup();
  }, []);

  return (
    <div>
      <ContactFormComponent
        edit={edit}
        idPessoa={id}
        idEndereco={id}
        isUpdate={isUpdate}
      />
    </div>
  );
}

export default Contacts;
