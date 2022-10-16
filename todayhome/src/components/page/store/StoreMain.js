import Carousel from 'react-bootstrap/Carousel';
import StoreData from '../../../db/StoreData.json';
import { useEffect, useState } from 'react';
import './StoreMain.scss';
import Deal from '../main/Deal.js';


function StoreMain() {

    const store = StoreData.banner;
    const [Idx, setIdx] = useState(0);
    const [BannerImg, setBannerImg] = useState(store[0].img);


    // useEffect(() => {
    //     switch (Idx) {
    //         case 0 :
    //             setBannerImg(store[0].img);
    //             break;
    //         case 1 :
    //             setBannerImg(store[1].img);
    //             break;
    //         case 2 :
    //             setBannerImg(store[2].img);
    //             break;
    //         case 3 :
    //             setBannerImg(store[3].img);
    //             break;
    //         case 4 :
    //             setBannerImg(store[4].img);
    //             break;
    //         default :
    //             setBannerImg(store[0].img);
    //     }
    // },[Idx]);



    return(

        <div className='store_entire_section'>
            <div className='store_top_section'>
                <div className='store_img_section'>
                    <Carousel>
                    {
                        store.map(function(store,i) {
                            return(
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={store.img} 
                                    />
                                </Carousel.Item>
                            )
                        })
                    }
                    </Carousel>

                </div>
                {/* <div className='store_img_category_section'>
                    <ul className='store_category_nav'>
                        {
                            store.map(function(name, i) {
                                return(
                                <li onClick={() => setIdx(name.id)}>
                                    <div>
                                        <span>{name.title}</span>
                                    </div>
                                </li>
                                )
                            })
                        }
                    </ul>
                </div> */}
            </div>
            <Deal />
        </div>
    )
}

export default StoreMain;