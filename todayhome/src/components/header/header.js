import PopUp from './mainPopUp.png';
import {Nav} from 'react-bootstrap'
import './header.scss';
import SubHeader from './subheader/subHeader.js';
import { useState, useEffect, createRef } from 'react';
import {Link, useNavigate} from 'react-router-dom';

// 아이콘
import {FiShoppingCart} from 'react-icons/fi'; // https://react-icons.github.io/react-icons 여기서 가져옴.
import { FaSearch } from 'react-icons/fa';


// 부트스트랩
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

// 카테고리 데이터 불러오기
import data from '../header/subheader/data.js';
import Search from '../page/search/Search.js';
import WriteModal from './WriteModal';



function Header () {

    // 메인 카테고리, 서브 카테고리 설정
    const [clickIdx, setClickIdx] = useState(0);
    const [subMenu, setSubMenu] = useState(data[0]);
    const [alert, setAlert] = useState(true);


    // 메인버튼 클릭 시 서브메뉴 전환
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


    // 이벤트 배너 (타이머)
    useEffect(() => {
        setTimeout(() => {
            setAlert(false);
        },5000)
    },[])


    // Ref이용한 input value값 가져오기
    const [ searchName, setSearchName ] = useState(); 
    const input = createRef();

    const onChangeInput = () => {
        console.log(input.current.value);
        setSearchName(input.current.value);
    }

    const navigate = useNavigate();
    const onClickInput = () => { 
        // 안되던 이유!!!!!! button onClick위에 링크를 걸면 온클릭은 실행하기전에 링크로 이동이외서 set적용이 안되는 것!!!!!
        // 1. 만약에 링크를 계속 이용하려면 onChagne에서 set을 해줘야할듯
        // 2. 만약에 링크를 버리고 button 온클릭을 사용하려면 링크를 버리고 navigator를 사용해서 이동해야할듯.으악 어려워!
        // setSearchName(input.current.value);

        
        // input창에 검색어가 빈값일 경우 검색되지 않도록 설정.
        if (( input.current.value == null) || ( input.current.value == '')) {
            return;
        } else {
            navigate('/search/?name='+ searchName , {state: {searchName: searchName}})
        }
    }


    const LoginBtn = () => {
        navigate('/users/login')
    }


    return (

        <header>
        {
            alert == true ? <div className='alert-warning'><img src={PopUp} onClick={()=> { window.alert('쿠폰이 발급되었습니다.'); setAlert(false) }}/><span className = 'alert-warning-time'>👈5초 뒤 사라져요!</span></div> : null

        }

        <Nav>
            <div className='container'>
                <Link to='/'><img src='/logo.png' width="74px" height="40px" /></Link>

                <ul className='Menu'>

                <Link to='/' style={{textDecoration:'none', color:'black'}}>
                    <li onClick={()=> { setClickIdx(0)}}>커뮤니티</li>
                </Link>

                <Link to='/store' style={{textDecoration:'none', color:'black'}}>
                    <li onClick={()=> { setClickIdx(1)}}>스토어</li>
                </Link>
                
                    <li onClick={()=> { setClickIdx(2)}}>이상/시공/수리</li>
                </ul>
                <ul className='MenuUser'>
                    <li>
                        <input className='Search' type='text' placeholder='통합검색' value={searchName} ref={input} onChange={onChangeInput}></input>
                        <button className='searchBtn' type="button" onClick={onClickInput}><FaSearch /></button>
                    </li>        
                    <li><span className='cartIcon'>
                        <FiShoppingCart /></span>
                    </li>
                    <li onClick={LoginBtn}>로그인</li>
                    <li className='signMenu'>회원가입</li>
                    <li>고객센터</li>

                </ul>    
                <ul className='posting'>
                    <li>
                        <DropdownButton id="dropdown-basic-button writeBtn" title="글쓰기">
                            <WriteModal />
                        </DropdownButton>
                    </li>
                </ul>
            </div>
        </Nav>
        <SubHeader subMenu={subMenu}/>
        </header>
    )
}

export default Header;