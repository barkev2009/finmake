import { useEffect, useLayoutEffect, useState } from 'react';
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

export function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}