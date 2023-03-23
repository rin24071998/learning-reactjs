import PrivateRoute from './app/routes/PrivateRoute';
import { BrowserRouter } from 'react-router-dom';
import PublicRoute from './app/routes/PublicRoute';
import './App.scss';
import { useAppSelector } from './redux/hooks';
function App() {
  const { authed } = useAppSelector((state) => state?.user);
  return (
    <div className="app">
      <BrowserRouter>
        <PublicRoute authed={authed} />
        <PrivateRoute authed={authed} />
      </BrowserRouter>
    </div>
  );
}

export default App;
