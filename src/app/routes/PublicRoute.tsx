import { pageName } from '@Constants/constant';
import Loginpage from '@Pages/Login.page';
import { Navigate, Route, Routes } from 'react-router-dom';

interface IPublicRoute {
  authed?: boolean;
}
export default function PuiblicRoute({ authed }: IPublicRoute) {
  return (
    <Routes>
      <Route
        path={pageName.LOGIN}
        element={
          !authed ? <Loginpage /> : <Navigate to={pageName.DASHBOARD} replace />
        }
      />
    </Routes>
  );
}
