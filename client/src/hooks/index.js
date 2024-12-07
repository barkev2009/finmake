import { useEffect, useLayoutEffect, useRef, useState } from 'react';
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

export function useSliderInitiator({ id, sliderHandler, upHandler, downHandler }) {
    const isVisible = useRef(document.querySelector(`#${id}.range-body`));


    useEffect(
        () => {
            if (isVisible.current !== undefined) {
                document.querySelector(`#${id}.range-body`).addEventListener(
                    'touchmove',
                    sliderHandler
                );
                document.querySelector(`#${id}.range-body`).addEventListener(
                    'touchstart',
                    downHandler
                );
                document.querySelector(`#${id}.range-body`).addEventListener(
                    'touchend',
                    upHandler
                );
                document.querySelector(`#${id} .range-selector`).addEventListener(
                    'mouseenter',
                    () => {
                        document.querySelector(`#${id} .range-selector .tooltip`).style.opacity = `100%`;
                    }
                );
                document.querySelector(`#${id} .range-selector`).addEventListener(
                    'mouseleave',
                    () => {
                        document.querySelector(`#${id} .range-selector .tooltip`).style.opacity = `0%`;
                    }
                );
            }
        }, [isVisible.current]
    );
}