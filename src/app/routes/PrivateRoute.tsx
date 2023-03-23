import { CONSTANTS } from '@Constants/constant';
import AdminPage from '@Pages/Admin.page';
import DashboardPage from '@Pages/Dashboard.page';
import { Navigate, useRoutes } from 'react-router-dom';

interface IPrivateRoute {
  authed?: boolean;
}
function PrivateRoute({ authed }: IPrivateRoute) {
  const routes = useRoutes([
    {
      path: CONSTANTS.pageName.ROOT,
      element: authed ? (
        <AdminPage />
      ) : (
        <Navigate to={CONSTANTS.pageName.LOGIN} replace />
      ),
      children: [
        {
          index: true,
          element: <DashboardPage />,
        },
        {
          path: CONSTANTS.pageName.DASHBOARD,
          element: <DashboardPage />,
        },
      ],
    },
  ]);
  return <>{routes}</>;
}
export default PrivateRoute;
