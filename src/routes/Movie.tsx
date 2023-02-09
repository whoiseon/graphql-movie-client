import { useParams } from 'react-router-dom';

function Movie() {
  const { id } = useParams();
  console.log(id);
  return <div>This is movie detail</div>;
}

export default Movie;
