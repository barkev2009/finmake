import { ROUTES } from "./const";
import Admin from "./routes/Admin";
import Auth from "./routes/Auth";
import Calculator from "./routes/Calculator";
import Landing from "./routes/Landing";

export const authRoutes = [
    {
        path: ROUTES.ADMIN_ROUTE,
        Component: Admin
    }
]

export const publicRoutes = [
    {
        path: '/',
        Component: Landing
    },
    {
        path: ROUTES.AUTH_ROUTE,
        Component: Auth
    },
    {
        path: ROUTES.CALC_ROUTE,
        Component: Calculator
    }
]