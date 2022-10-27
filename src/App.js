import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import { ToastContainer } from 'react-toastify';

import { Dashboard, Alimento, GridAlimentos, Login, SignIn, ForgotPassword } from './components';

import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <Router>
      <main>
        <Routes>
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
            path="/sign-in"
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
              <Navigate to="/" />
            }
          />
        </Routes>
      </main>
      <ToastContainer />
    </Router>
  );
}

export default App;
