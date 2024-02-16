import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Admin from './pages/Admin/Admin';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Experiment from './pages/Experiment/Experiment';

const App = () => {
  return (
    <div id="dashboard">
      <BrowserRouter>
        <Routes>
          {/* Route to the Login page by default */}
          <Route path="/" element={<Login />} />

          {/* Routes when logged in */}
          <Route path="/layout/*" element={<Layout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="admin" element={<Admin />} />
            <Route path="experiment" element={<Experiment />} />
            {/* Redirect any unmatched URLs to the dashboard */}
            <Route path="*" element={<Navigate to="dashboard" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
