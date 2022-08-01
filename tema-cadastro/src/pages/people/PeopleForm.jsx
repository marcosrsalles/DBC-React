import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { PeopleContext } from "./../../context/PeopleContext";
import FormComponent from "./components/FormComponent";

function PeopleForm() {
  const { id } = useParams();
  const [isUpdate, setIsUpdate] = useState(false);
  const { getPeopleById, people } = useContext(PeopleContext);

  const setup = async () => {
    if (id) {
      setIsUpdate(true);
      getPeopleById(id);
    }
  };

  useEffect(() => {
    setup();
  }, []);

  return (
    <div>
      <div>
        <FormComponent isUpdate={isUpdate} />
      </div>
    </div>
  );
}

export default PeopleForm;
