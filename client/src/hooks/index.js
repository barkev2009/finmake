import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../const';

export const useAuthorization = (user, location) => {
    const navigate = useNavigate();

    useEffect(
        () => {
            if (!user.isAuth && location.pathname === ROUTES.ADMIN_ROUTE) {
                navigate(ROUTES.AUTH_ROUTE);
            }
            if (user.isAuth && location.pathname === ROUTES.AUTH_ROUTE) {
                navigate(ROUTES.ADMIN_ROUTE);
            }
        }, [user.isAuth]
    );
}
