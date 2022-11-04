import {
  Navigate,
  useRoutes,
} from 'react-router-dom';
import AdminPage from '../pages/Admin.page';
import DashboardPage from '../pages/Dashboard.page';

interface IPrivateRoute {
  authed?: boolean;
}
function PrivateRoute({ authed }: IPrivateRoute) {
  const element = useRoutes([
    {
      path: "/",
      element: authed ? <AdminPage /> : <Navigate to="/login" replace />,
      children: [
        {
         index: true,
         element: <DashboardPage />
        },
        {
          path: "dashboard",
          element: <DashboardPage />,
        },
        { path: "dashboard1", element: <DashboardPage /> },
      ],
    },
  ]);
  return (
   <>
    {element}
    </>
  );
}
export default PrivateRoute;
