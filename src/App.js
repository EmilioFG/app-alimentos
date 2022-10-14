import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import { ToastContainer } from 'react-toastify';

import { Home } from './components/home';
import { Alimento } from './components/alimento';
import { GridAlimentos } from './components/grid-alimentos';

import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route
            exact
            path="/"
            element={<Home />}
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
