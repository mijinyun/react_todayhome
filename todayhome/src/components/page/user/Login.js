import './Login.scss';
import { createRef,useState } from 'react'
import Users from '../../../db/Users.json';

function Login() {

    const [id, setId] = useState();
    const [pw , setPW] = useState();

    const user = Users.user;
    const userId = createRef();
    const userPW = createRef();

    const Login = (e) => {
        
        // const result = user.filter(function(a,i) {
        //     return ( a.id == userId );
        // })
        // console.log(result);

        user.map(function(test,i) {
            test.id == id ? ( test.pw == pw ? console.log('로그인 성공') : console.log('비밀번호 땡!')) : console.log('아이디 땡!');


        })
    }

    return(
        <div>
            <div className='login_entire_section'>
                <div className='login_section'>
                    <input ref={userId} type='text' placeholder='아이디' onChange={(e) => setId(e.target.value)}></input>
                    <input ref={userPW} type='password'placeholder='비밀번호' onChange={(e) => setPW(e.target.value)}></input>
                    <button onClick={Login}>로그인</button>
                </div>
            </div>
        </div>
    )
}

export default Login;