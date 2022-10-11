import './Story.scss';
import {Link} from 'react-router-dom';
import StoryBanner from './StoryBanner';

function Story () {
    return(
        <div className='story_entire_section'>
            <div className='story_section'>
                <header>
                    <h2 style={{fontSize:'20px', fontWeight:'700'}}>오늘의 스토리</h2>
                </header>
                    <ul className='story_layout row'>
                        <li className='col-6 col-md-3'>
                            <div>
                                <Link style={{textDecoration:'none'}}>
                                    <div className='story_entry_img_wrap'>
                                        <img src='/story1.png'></img>
                                    </div>
                                    <div className='story_entry_content_wrap'>
                                        <div className='story_entry_content'>
                                            <div className='story_entry_content_title'>게으른 집순이의 폭신한 복층<br /></div>
                                            <div className='story_entry_content_profile'>
                                                <img src='/profile1.png' />
                                                <span>헬로웅</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </li>

                        <li className='col-6 col-md-3'>
                            <div>
                                <Link style={{textDecoration:'none'}}>
                                    <div className='story_entry_img_wrap'>
                                        <img src='/story2.png'></img>
                                    </div>
                                    <div className='story_entry_content_wrap'>
                                        <div className='story_entry_content'>
                                            <div className='story_entry_content_title'>빈티지 분위기 낭낭한 대형 평수</div>
                                            <div className='story_entry_content_profile'>
                                                <img src='/profile2.png' />
                                                <span>뭉이</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </li>

                        <li className='col-6 col-md-3'>
                            <div>
                                <Link style={{textDecoration:'none'}}>
                                    <div className='story_entry_img_wrap'>
                                        <img src='/story3.png'></img>
                                    </div>
                                    <div className='story_entry_content_wrap'>
                                        <div className='story_entry_content'>
                                            <div className='story_entry_content_title'>알록달록은 숨기며, 아이와 함께 살기</div>
                                            <div className='story_entry_content_profile'>
                                                <img src='/profile3.png' />
                                                <span>냥이</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </li>
                    
                    <div className='col-6 col-md-3 story_content_wrap' >
                        <StoryBanner />
                    </div>   
                    </ul>
                </div>
            </div>
        
    )
}

export default Story;