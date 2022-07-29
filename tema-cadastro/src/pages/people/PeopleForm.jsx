import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiDbc } from "../../api";

import FormComponent from "./components/FormComponent";

function PeopleForm() {
  const { id } = useParams();
  const [people, setPeople] = useState();
  const [isUpdate, setIsUpdate] = useState(false);

  const setup = async () => {
    if (id) {
      setIsUpdate(true);
    }
    try {
      const { data } = await apiDbc.get(
        `/pessoa/lista-completa?idPessoa=${id}`
      );
      setPeople(...[data]);
      console.log(setPeople(...[data]));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setup();
  }, []);

  return (
    <div>
      <div>
        <h1>People form</h1>
        <FormComponent isUpdate={isUpdate} />
      </div>
    </div>
  );
}

export default PeopleForm;
