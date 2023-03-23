import PrivateRoute from './app/routes/PrivateRoute';
import { BrowserRouter } from 'react-router-dom';
import PublicRoute from './app/routes/PublicRoute';
import './App.css';
function App() {
  return (
    <>
      <BrowserRouter>
        <PublicRoute authed={false} />
        <PrivateRoute authed={false} />
      </BrowserRouter>
    </>
  );
}

export default App;
