import { Route, Navigate, Outlet, Routes } from "react-router-dom";
import { AuthLayout } from "../layouts/AuthLayout/index";
import { LoginPage, RegisterPage } from "../pages/auth/AuthPage/index";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext/index";

export const PublicRoutes = () => {
    return (
        <Routes>
            <Route element={<UnprotectedRoutes />}>
                <Route path='login' element={<AuthLayout children={<LoginPage />} />} />
                <Route path='sign-up' element={<AuthLayout children={<RegisterPage />} />} />
                <Route path='/*' element={<Navigate to='/auth/login' replace />} />
            </Route>
        </Routes>
    );
};

const UnprotectedRoutes: React.FC = () => {
    const {
        auth: { logged },
    } = useContext(AuthContext);
    
    return <>{logged ? <Navigate replace to='/home/' /> : <Outlet />}</>;
};
