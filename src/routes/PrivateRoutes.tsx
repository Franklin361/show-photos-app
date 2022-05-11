import { Route, Navigate, Outlet, Routes } from "react-router-dom";
import { HomeLayout } from "../layouts/HomeLayout/index";
import { HomePage } from "../pages/HomePage/index";
import { PerfilPage } from "../pages/PerfilPage/index";
import { FavoritesPage } from "../pages/FavoritesPage/index";
import { SingleImagePage } from "../pages/SingleImagePage/index";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext/index";
export const PrivateRoutes = () => {
    return (
        <Routes>
            <Route element={<ProtectedRoutes />}>
                <Route path='/' element={<HomeLayout children={<HomePage />} />} />
                <Route path='/perfil' element={<HomeLayout children={<PerfilPage />} />} />
                <Route path='/my-favorites' element={<HomeLayout children={<FavoritesPage />} />} />
                <Route path=':image' element={<HomeLayout children={<SingleImagePage />} />} />
                <Route path='/*' element={<Navigate to='/home/' replace />} />
            </Route>
        </Routes>
    );
};

const ProtectedRoutes: React.FC = () => {
    const {
        auth: { logged },
    } = useContext(AuthContext);

    return <>{logged ? <Outlet /> : <Navigate replace to='/auth/login' />}</>;
};
