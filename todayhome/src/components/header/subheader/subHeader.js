import './subheader.scss';


function SubHeader(props) {

    console.log(props);

    return(
        <div>
            <div className='subMenu'>
                <ul>
                    <li>홈</li>
                    <li>팔로잉</li>
                    <li>사진</li>
                    <li>집들이</li>
                    <li>노하우</li>
                    <li>전문가집들이</li>
                    <li>셀프가이드</li>
                    <li>질문과답변</li>
                    <li>이벤트</li>
                </ul>
                <ul>
                    <li>3D인테리어</li>
                </ul>
            </div>
        </div>
    )
}

export default SubHeader;