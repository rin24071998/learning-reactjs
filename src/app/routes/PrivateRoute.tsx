import { Navigate, useRoutes } from 'react-router-dom';
import { pageName } from '../constants/constant';
import AdminPage from '../pages/Admin.page';
import DashboardPage from '../pages/Dashboard.page';

interface IPrivateRoute {
  authed?: boolean;
}
function PrivateRoute({ authed }: IPrivateRoute) {
  const routes = useRoutes([
    {
      path: pageName.ROOT,
      element: authed ? (
        <AdminPage />
      ) : (
        <Navigate to={pageName.LOGIN} replace />
      ),
      children: [
        {
          index: true,
          element: <DashboardPage />,
        },
        {
          path: pageName.DASHBOARD,
          element: <DashboardPage />,
        },
      ],
    },
  ]);
  return <>{routes}</>;
}
export default PrivateRoute;
