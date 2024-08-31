import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routes/AppRouter';
import { useDispatch } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import { checkAPI } from './www/authAPI';
import { setIsAuth, setUser } from './store/userSlice';


function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const checkAuth = useCallback(
    () => {
      checkAPI()
        .then(
          user => {
            dispatch(setUser(user));
            dispatch(setIsAuth(true));
          }
        )
        .catch(
          (resp) => {
            console.log(resp)
          }
        )
        .finally(setLoading(false));
    }, [dispatch]
  )

  useEffect(
    () => {
      checkAuth()
    }, [checkAuth]
  )

  if (loading) {
    return <div>LOADING</div>
  }

  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
