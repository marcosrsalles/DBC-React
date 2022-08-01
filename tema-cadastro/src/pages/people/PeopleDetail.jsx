import { useParams } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { PeopleContext } from './../../context/PeopleContext';
import PeopleDetailComponent from './components/PeopleDetailComponent'

function  PeopleDetail() {
  const { id } = useParams();
  const { handleDetails } = useContext(PeopleContext);

  const setup = async () => {
    await handleDetails(id);
  }

  useEffect(() => {
    setup()
  }, []);
   

  return (<PeopleDetailComponent />);
}

export default PeopleDetail;
