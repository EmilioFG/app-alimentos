import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Dashboard, Alimento, GridAlimentos, Login, SignIn, ForgotPassword } from './components';

import CONFIG from './config';

import 'react-toastify/dist/ReactToastify.css';


const token = JSON.parse(sessionStorage.getItem(CONFIG.REACT_APP_SESSION_SECRET));


function App() {
  return (
    <Router>
      <main>
        <Routes>
          {
            !token ? (
              <>
                <Route
                  exact
                  path="/"
                  element={<Login />}
                />
                <Route
                  exact
                  path="/login"
                  element={<Login />}
                />
              </>
            ) : (
              <>
                <Route
                  exact
                  path="/"
                  element={<Dashboard />}
                />
                <Route
                  exact
                  path="/alimento/:id"
                  element={<Alimento />}
                />
                <Route
                  exact
                  path="/alimentos"
                  element={<GridAlimentos />}
                />
                <Route
                  exact
                  path="/login"
                  element={<Login />}
                />
                <Route
                  exact
                  path="/signin"
                  element={<SignIn />}
                />
                <Route
                  exact
                  path="/forgot-password"
                  element={<ForgotPassword />}
                />
                <Route
                  path="*"
                  element={
                    <Navigate to="/login" />
                  }
                />
              </>
            )
          }
        </Routes>
      </main>
      <ToastContainer />
    </Router>
  );
}

export default App;
