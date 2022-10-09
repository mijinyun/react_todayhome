import Logo from './logo.png';
import {Nav} from 'react-bootstrap'
import './header.css';
import SubHeader from './subHeader/subHeader';


function Header () {
    return (
        <>
        <Nav>
            <div className='container'>
                <img src={Logo} width="100px"/>
                <ul className='Menu'>
                    <li>커뮤니티</li>
                    <li>메뉴</li>
                    <li>인테리어시공</li>
                </ul>
                <ul>
                    <li>검색</li>
                    <li>장바구니</li>
                    <li>로그인</li>
                    <li>회원가입</li>
                    <li>고객센터</li>
                </ul>    
                <ul className='posting'>
                    <li>글쓰기</li>
                </ul>
            </div>
        </Nav>
        <SubHeader />
        </>
    )
}

export default Header;