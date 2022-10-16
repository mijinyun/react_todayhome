import Header from "../../header/header";
import { useParams , useSearchParams, useLocation } from 'react-router-dom';
import './Search.scss';
import product_data from '../../../db/PostingData.json';

function Search(props) {

  // 1차 방법 ) header 에서 useNavigate를 이용해서 url과 state를 보내주는데, 그것을 useLocation으로 받아서 사용할 수 있다. 
  const location = useLocation();
  const { searchName } = location.state;
  // const searchName = state.searchName;


  // 2차 방법 ) header에서 useNavigate를 이용해서 url에 서치한 값을 보내줌. 그 url을 파싱해서 서치한 값을 알아내는 것!
  // const [ searchParams , setSearchParams ] = useSearchParams();
  // const searchName = searchParams.get('name');
  

  const product = product_data.deal; // 배열안 객체
  const result = product.filter((value) => { // 배열 안 객체들 중 
    return (value.title.includes(searchName));  // 키 title의 값이 searchName을 포함하고 있는지! true면 return 헤서 result에 담긴다. -> 객체 형태로 ! 그래서 아래서 map을 사용해서 띄우면 된다뤼
  })
  
  return(
    <>
      <Header />
      <div className='search_entire_section'>
        <div className = 'search_section'>
          <header>
            <h2 style={{fontSize:'20px', fontWeight:'700'}}>'{searchName}' 검색 결과입니다.</h2>
          </header>
          <div className='search_layout'>
            <ul className='search_contents'>
                {
                  result.map(function(searchResult,i){
                    return(
                      <li className='search_content'>
                        <div>
                            <img src={searchResult.img}></img>
                        </div>
                        <div>
                            <div>
                              <div className='search_entry_content_company'>{searchResult.company}</div>
                                <div className='search_entry_content_title'>{searchResult.title}</div>
                                <div className='search_entry_content_info'>
                                  <div className='search_entry_content_price'>
                                    <span className='price_sale'>{searchResult.sale}</span>
                                    <span className='price'>{searchResult.price}</span>
                                  </div>
                                  <div>여기는 무료배송, 특가 등등 추가할 곳 (나중에 필터적용가능한지 확인도할것!</div>
                                </div>
                            </div>
                        </div>
                      </li>
                    )
                  })
                }
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Search;