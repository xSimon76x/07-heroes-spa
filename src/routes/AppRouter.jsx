import { Route, Routes } from "react-router-dom";
import { LoginPage } from '../auth'
import { HeroesRoutes } from "../heroes";
import { PrivateRoute, PublicRoute } from "./"


export const AppRouter = () => {
    return (
        <>
            <Routes>
                {/* Rutas publicas */}
                <Route path="login" element={
                    <PublicRoute>
                        <LoginPage />
                    </PublicRoute>
                }/>

                {/* Rutas privadas */}
                <Route path="/*" element={
                    <PrivateRoute>
                        <HeroesRoutes />
                    </PrivateRoute>
                } />
            </Routes>
        </>
    )
}
