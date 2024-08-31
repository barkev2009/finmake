import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes'
import { ROUTES } from '../const'
import { useSelector } from 'react-redux'

const AppRouter = () => {

    const isAuth = useSelector(state => state.user.isAuth);

    return (
        <Routes>
            {
                isAuth && authRoutes.map(
                    ({ path, Component }) => <Route key={path} path={path} Component={Component} exact />
                )
            }
            {
                publicRoutes.map(
                    ({ path, Component }) => <Route key={path} path={path} Component={Component} exact />
                )
            }
            <Route exact path='*' element={<Navigate to={ROUTES.AUTH_ROUTE} />} />
        </Routes>
    )
}


export default AppRouter