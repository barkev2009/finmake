import React, {  useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from '../const';
import { useAuthorization } from '../hooks';
import { useDispatch } from 'react-redux';
import { loginAPI } from '../www/authAPI';
import { setIsAuth } from '../store/userSlice';
import { setCookie } from '../utils/cookies';

const Auth = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const location = useLocation();
  const dispatch = useDispatch();
  useAuthorization(location);

  const navigate = useNavigate();

  const logIn = async (e) => {
    e.preventDefault();
    try {

      const resp = await loginAPI(login, password);
      setCookie(process.env.REACT_APP_LOCAL_STORAGE_KEY, resp.token);
      dispatch(setIsAuth(true));
      setError(null);
      navigate(ROUTES.ADMIN_ROUTE);
    } catch (error) {
      setError(error.response.data.message);
    }

  }

  return (
    <>
      <form onSubmit={logIn}>
        {error && <div  >{`Ошибка: ${error}`}</div>}
        <h2>Авторизация</h2>
        <div >
          <input type="text" placeholder='Введите логин...' className="form-control mt-4" id="login_input" onChange={e => setLogin(e.target.value)} value={login} />
        </div>
        <div >
          <input type="password" placeholder='Введите пароль...' className="form-control mt-4" id="password_input" onChange={e => setPassword(e.target.value)} value={password} />
        </div>
        <button type="submit" className="btn btn-outline-primary" onClick={logIn} >Войти</button>
      </form>
    </>
  )
}


export default Auth