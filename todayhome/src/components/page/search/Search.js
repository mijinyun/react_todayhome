import Header from "../../header/header";
import { useParams , useSearchParams, useLocation } from 'react-router-dom';

function Search(props) {

  const location = useLocation();
  const search_name = location.searchName;
  console.log(search_name);


  const [ searchParams , setSearchParams ] = useSearchParams();
  const searchName = searchParams.get('name');
  
  return(
    <>
      <Header />
      <div>
        <h1>일단 테스트</h1>
        {/* <h2>{searchName}</h2> */}
        <h2>{search_name}</h2>
      </div>
    </>
  )
}

export default Search;