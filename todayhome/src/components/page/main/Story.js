import './Story.scss';
import {Link} from 'react-router-dom';

function Story () {
    return(
        <section>
            <header>
                <h2>오늘의 스토리</h2>
            </header>
            <ul>
                <li>
                    <div>
                        <Link>
                            <div className='story_entry_img_wrap'>
                                <img src='/story1.png'></img>
                            </div>
                            <div className='story_entry_content_wrap'>
                                <div className='story_entry_content'>
                                    <div className='story_entry_content_title'>게으른 집순이의 폭신한 복층<br /></div>
                                    <div className='story_entry_content_profile'></div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </li>

                <li>
                    <div>
                        <Link>
                            <div className='story_entry_img_wrap'>
                                <img></img>
                            </div>
                            <div className='story_entry_content_wrap'>
                                <div className='story_entry_content'>
                                    <div className='story_entry_content_title'></div>
                                    <div className='story_entry_content_profile'></div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </li>

                <li>
                    <div>
                        <Link>
                            <div className='story_entry_img_wrap'>
                                <img></img>
                            </div>
                            <div className='story_entry_content_wrap'>
                                <div className='story_entry_content'>
                                    <div className='story_entry_content_title'></div>
                                    <div className='story_entry_content_profile'></div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </li>

                <div>
                    <Link>
                        <div></div>
                        <div></div>
                    </Link>
                </div>
            </ul>
        </section>
    )
}

export default Story;