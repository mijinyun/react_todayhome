import './homeMain.scss';

function HomeMain() {
    return(
        <>
            <div className='container'>
                <div className='img_wrap'>
                    <img src='https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/projects/166366213780546857.jpg?gif=1&w=850&h=567&c=c&webp=1'></img>
                </div>
                <div className='img_content_wrap'>
                    <div className='img_content'>
                        <div className='img_content_title'>
                            <h1>디자이너 부부의 우드 하우스</h1>
                            <div>
                                <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images1577385588_90294.jpeg?gif=1&w=36&h=36&c=c&webp=1"/>
                                <span>litt.정원</span>
                            </div>
                        </div>
                    </div>
                    <div className='img_more'>
                        <button>보러가기</button>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default HomeMain;