import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../const';
import { useSelector } from 'react-redux';

export const useAuthorization = (location) => {
    const navigate = useNavigate();
    const isAuth = useSelector(state => state.user.isAuth);

    useEffect(
        () => {
            if (!isAuth && location.pathname === ROUTES.ADMIN_ROUTE) {
                navigate(ROUTES.AUTH_ROUTE);
            }
            if (isAuth && location.pathname === ROUTES.AUTH_ROUTE) {
                navigate(ROUTES.ADMIN_ROUTE);
            }
        }, [isAuth]
    );
}
