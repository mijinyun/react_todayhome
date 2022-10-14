import './Login.scss';
import { createRef,useState } from 'react'
import {useNavigate} from 'react-router-dom';
import Users from '../../../db/Users.json';


function Login() {

    const user = Users.user;
    const userId = createRef();
    const userPW = createRef();

    const navigate = useNavigate();
    
    const Login = () => {

        const result = user.filter(function(test,i) {
            return ((test.id == userId.current.value) && (test.pw == userPW.current.value)); // 일치하는 것만 뽑아오는 거라 일치하지 않으면 현재 result는 빈값이 되는 것!
        });
        console.log( "result : ", result ); // 만약 입력값이 데이터에 없는 값이면 빈값이 들어오는 것이다. 

        if ( result == null || result == "" ) alert("로그인 실패");// 그렇기 때문에 result 가 null 이거 빈값이면 로그인 실패를 띄우는 것!!!!!!
        else alert("로그인 성공");

    }

    return(
        <div className='login_whole'>
        <div className='Login_entire_container'>
            <div className='login_entire_section'>
                <div className='login_logo' onClick={() => {navigate('/')}}>
                    <img className='logo2' src='/logo2.png'></img>
                    <img className='logo' src='/logo.png'></img>
                </div>
                <div className='login_section'>
                    <div className='login_input_section'>
                        <input className='input_id' ref={userId} type='text' placeholder='아이디'></input>
                        <input className='input_pw' ref={userPW} type='password' placeholder='비밀번호' onKeyPress={(e) => {if (e.key === 'Enter') { Login(); }}}></input><br />
                        <button className='login_section_loginBtn' onClick={Login}>로그인</button>
                    </div>
                    <div className='login_etc_section'>
                        <div className='find_register'>
                            <span className='re_pw'>비밀번호 재설정</span>
                            <span className='register'>회원가입</span>
                        </div>
                        <hr />
                    <div className='login_sns'>SNS계정으로 간편 로그인/회원가입</div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Login;