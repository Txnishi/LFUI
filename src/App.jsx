import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Admin from './pages/Admin/Admin';
import Login from './pages/Login/Login';
import NpclDashboard from './pages/Dashboard/NpclDashboard';
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
            <Route path="npcldashboard" element={<NpclDashboard />} />
            <Route path="admin" element={<Admin />} />
            <Route path="experiment" element={<Experiment />} />
            {/* Redirect any unmatched URLs to the dashboard */}
            <Route path="*" element={<Navigate to="npcldashboard" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
