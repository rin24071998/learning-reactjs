import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { pageName } from '../constants/constant';
import Loginpage from '../pages/Login.page';
interface IPublicRoute {
  authed?: boolean;
}
export default function PuiblicRoute({authed}: IPublicRoute) {
  return (
    <Routes>
      <Route path={pageName.LOGIN} element={!authed ? <Loginpage /> : <Navigate to={pageName.DASHBOARD} replace/>} />
    </Routes>
  );
}
