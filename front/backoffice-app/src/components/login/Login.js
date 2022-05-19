import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { authService } from './../../services/auth.service'
import './Login.scss';

const Login = () => {
  // eslint-disable-next-line
  const [cookies, setCookie, removeCookie] = useCookies(['app-token']);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const loginRef = React.createRef();
  const passRef = React.createRef();

  const loginFn = (e) => {
    e.preventDefault();
    
    const login = loginRef.current.value;
    const password = passRef.current.value;
    
    const data = { login, password };
    
    authService.login(data)
    .then((res) => {
      if (res.data.success) {
        setCookie('app-token', res.data.token, { path: '/' , maxAge: 36000 });
        navigate("/home")
      }
      else {
        setError(true);
      };
    });
  };
  
  return (
    <div className="login-container">
        <h1 className="">Login</h1>
        <form className="login-form">
            <input ref={loginRef} placeholder="Username" type="text"></input>
            <input ref={passRef} placeholder="Password" type="password"></input>

            <div className="button-container">
            <button onClick={e => loginFn(e)} className="login-button">Zaloguj</button>
            </div>
            {error && <p className="error">Zły login albo hasło</p>}
        </form>
    </div>
  );
};

export default Login;