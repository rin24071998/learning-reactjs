import { CONSTANTS } from '@Constants/constant';
import Loginpage from '@Pages/Login.page';
import { Navigate, Route, Routes } from 'react-router-dom';

interface IPublicRoute {
  authed?: boolean;
}
export default function PuiblicRoute({ authed }: IPublicRoute) {
  return (
    <Routes>
      <Route
        path={CONSTANTS.pageName.LOGIN}
        element={
          !authed ? (
            <Loginpage />
          ) : (
            <Navigate to={CONSTANTS.pageName.DASHBOARD} replace />
          )
        }
      />
    </Routes>
  );
}
