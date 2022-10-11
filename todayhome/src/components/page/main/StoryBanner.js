import './StoryBanner.scss';
import {Link} from 'react-router-dom';


function StoryBanner() {
    return(
        
            //  <div className='story_content_container'>
            <>
                        <div className='story_content_layout'>
                        <Link style={{textDecoration:'none'}}>
                            <div className='story_content_description'>예쁜 집 구경하기</div>
                            <div className='story_content_title'>집들이</div>
                        </Link>
                        </div>
                        <div className='story_content_layout'>
                        <Link style={{textDecoration:'none'}}>
                            <div className='story_content_description'>전문가 시공사례</div>
                            <div className='story_content_title'>전문가 집들이</div>
                        </Link>
                        </div>
                        <div className='story_content_layout'>
                        <Link style={{textDecoration:'none'}}>
                            <div className='story_content_description'>인테리어 꿀팁 총 집합</div>
                            <div className='story_content_title'>노하우</div>
                        </Link>
                        </div>
            </>
            // </div>
        
    )
}

export default StoryBanner;