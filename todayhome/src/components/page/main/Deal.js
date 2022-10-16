import { Link } from 'react-router-dom';
import PostingData from '../../../db/PostingData.json';
import './Deal.scss';

function Deal() {

    const dealData = PostingData.deal;

    return(
        
            <div className='deal_entire_section'>
                <div className='deal_section'>
                    {/* <header> */}
                        <h1 style={{fontSize:'20px', fontWeight:'700'}}>오늘의 딜</h1>
                    {/* </header> */}
                    <div>
                        <ul className='deal_layout'>

                            {
                                dealData.map(function(deal,i) {
                                    return(

                                    <li className='col-6 col-md-3'>
                                        <div>
                                            <Link style={{textDecoration:'none', color:'black'}}>
                                                <div className='deal_entry_img_wrap'>
                                                    <img src={deal.img}></img>
                                                </div>
                                                <div className='deal_entry_content_wrap'>
                                                    <div className='deal_entry_content'>
                                                        <div className='deal_entry_content_company'>{deal.company}</div>
                                                        <div className='deal_entry_content_title'>{deal.title}</div>
                                                        <div className='deal_entry_content_info'>
                                                            <div className='deal_entry_content_price'>
                                                                <span className='price_sale'>{deal.sale}</span>
                                                                <span className='price'>{deal.price}</span>
                                                            </div>
                                                            <div>여기는 무료배송, 특가 등등 추가할 곳 (나중에 필터적용가능한지 확인도할것!</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </li>

                                    )
                                })
                            }

                        </ul>
                        </div>
                </div>
            </div>
        
    )
}

export default Deal;


// deal_layout