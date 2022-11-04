import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Loginpage from '../pages/Login.page';
interface IPublicRoute {
  authed?: boolean;
}
export default function PuiblicRoute({authed}: IPublicRoute) {
  return (
    <Routes>
      <Route path="/login" element={!authed ? <Loginpage /> : <Navigate to="/dashboard" replace/>} />
    </Routes>
  );
}
