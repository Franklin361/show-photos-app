import { useContext, useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { PublicRoutes, PrivateRoutes } from "./";
import { AuthContext } from '../context';
import { Loader } from '../components';


export const AppRouter = () => {
    const { auth:{ checking }, verifyToken } = useContext(AuthContext)
    useEffect(() => { verifyToken(); }, []);

    if (checking) return <Loader fullScreen/>

    return (
        <BrowserRouter>
            <Routes>
                <Route path="auth/*" element={<PublicRoutes/>}/>
                <Route path="home/*" element={<PrivateRoutes/>}/>

                <Route path='/*' element={<Navigate to='auth/login' replace />} />
            </Routes>
        </BrowserRouter>
    );
};


