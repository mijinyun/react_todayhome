import './homeBanner.scss';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../banner1.png'
import banner2 from '../../../banner2.png'
import banner3 from '../../../banner3.png'

function HomeBanner() {
    return (
        <>
        <div className='main_banner_img'>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="banner_img d-block w-100"
                        src={banner1}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="banner_img d-block w-100"
                        src={banner2}
                        alt="Second slide"
                        />

                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="banner_img d-block w-100"
                        src={banner3}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
            </Carousel>
        </div>
        </>
    )
}

export default HomeBanner;