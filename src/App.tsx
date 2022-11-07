import React from 'react';
import './App.css';
import PrivateRoute from './app/routes/PrivateRoute';
import { BrowserRouter } from 'react-router-dom';
import PublicRoute from './app/routes/PublicRoute';
import { Counter } from './redux/features/counter/Counter';
function App() {
  return (
    <>
      <Counter />
      <BrowserRouter>
        <PublicRoute authed={true} />
        <PrivateRoute authed={true} />
      </BrowserRouter>
    </>
  );
}

export default App;
