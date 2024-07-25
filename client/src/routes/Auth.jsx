import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { ADMIN_ROUTE } from '../const';
import { observer } from 'mobx-react-lite';
import user from '../store/user';
import { useAuthorization } from '../hooks';

const Auth = observer(
  () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const location = useLocation();

    useAuthorization(user, location);

    const navigate = useNavigate();

    const logIn = async (e) => {
      e.preventDefault();
      try {

        user.login(login, password);
        setError(null);
        navigate(ADMIN_ROUTE);
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
)

export default Auth