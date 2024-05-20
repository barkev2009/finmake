import { ADMIN_ROUTE, AUTH_ROUTE } from "./const";
import Admin from "./routes/Admin";
import Auth from "./routes/Auth";
import Landing from "./routes/Landing";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
]

export const publicRoutes = [
    {
        path: '/',
        Component: Landing
    },
    {
        path: AUTH_ROUTE,
        Component: Auth
    }
]