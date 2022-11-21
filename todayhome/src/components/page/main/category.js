import './navbar.scss';
import data2 from '../../../db/CateData.json';

function SearchCategory() {
    const caData = data2.categoryData;

    return(
        

                <div className='nav_container'>
                    {/* <header>
                        <h2 style={{fontSize:'20px', fontWeight:'700'}}>카테고리별 상품 찾기</h2>
                    </header> */}
                    <ul className='nav_category'>

                    {
                        caData.map(function(cate,i) {
                            return(
                            <li>
                                <div>
                                    <img src={cate.img}></img>
                                </div>
                                <div>{cate.title}</div>
                            </li>
                            )
                        })
                    }
                    
                    </ul>
        </div>

    )
}

export default SearchCategory;