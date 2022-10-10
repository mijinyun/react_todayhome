import Logo from './logo.png';
import {Nav} from 'react-bootstrap'
import './header.scss';
import SubHeader from './subheader/subHeader.js';
import { useState } from 'react';
import {FiShoppingCart} from 'react-icons/fi'; // https://react-icons.github.io/react-icons 여기서 가져옴.
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useEffect } from 'react';
import data from '../header/subheader/data.js';



function Header () {

    const [clickIdx, setClickIdx] = useState(0);
    const [subMenu, setSubMenu] = useState(data[0]);

    useEffect(() => {
        switch (clickIdx) {
            case 0 :
                setSubMenu(data[0]);
                break;
            case 1 :
                setSubMenu(data[1]);
                break;
            case 2 :
                setSubMenu(data[2]);
                break;
            default :
                setSubMenu(data[0]);
        }
    },[clickIdx]);


    function clickMenu(num) {
        setClickIdx(num);
    }

    return (
        <>
        <Nav>
            <div className='container'>
                <img src={Logo} width="100px"/>
                <ul className='Menu'>
                    <li onClick={clickMenu(0)}>커뮤니티</li>
                    <li onClick={clickMenu(1)}>메뉴</li>
                    <li onClick={clickMenu(2)}>이상/시공/수리</li>
                </ul>
                <ul>
                    <li><input type='text'></input></li>
                    <li><FiShoppingCart /></li>
                    <li>로그인</li>
                    <li className='signMenu'>회원가입</li>
                    <li>고객센터</li>
                </ul>    
                <ul className='posting'>
                    <li>
                        <DropdownButton id="dropdown-basic-button" title="글쓰기">
                        <Dropdown.Item href="#/action-1">사진/동영상 올리기</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">집들이 글쓰기</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">노하우 글쓰기</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">상품 리뷰 쓰기</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">시공 전문가 리뷰쓰기</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">인테리어 질문하기</Dropdown.Item>
                        </DropdownButton>
                    </li>
                </ul>
            </div>
        </Nav>
        <SubHeader subMenu={subMenu}/>
        </>
    )
}

export default Header;