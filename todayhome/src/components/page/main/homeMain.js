import './homeMain.scss';
import Navbar from './navbar.js';
import HomeBanner from './homeBanner.js';
import Story from './Story.js';
import SearchCategory from './category';
import Deal from './Deal';

function HomeMain() {
    return(
        <div className='homeMain-container'>
            <div className='main-container'>
                <div className='row'>
                    <div className='img_wrap'>
                        
                        <div className='img_wrap_img'>
                            <img className='img_wrap_img_sample' src='https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/projects/166366213780546857.jpg?gif=1&w=850&h=567&c=c&webp=1'></img>

                            <div className="img_content_sample_wrap">
                                <div className='img_content_sample'>
                                    <div className='img_content_sample_title'>
                                        <h1>디자이너 부부의 우드 하우스</h1>
                                        <div>
                                            <img className='sample_img' src="https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images1577385588_90294.jpeg?gif=1&w=36&h=36&c=c&webp=1"/>
                                            <span>litt.정원</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='img_more_sample'>
                                    <button>보러가기</button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='main_banner'>
                        <HomeBanner />
                    
                    </div>
                </div>
            </div>

            <Navbar />
            <Story />
            <SearchCategory />
            <Deal />
            
        </div>
    )
}

export default HomeMain;