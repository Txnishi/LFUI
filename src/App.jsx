import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout';
// import DataGrid from './pages/DataGrid/DataGrid';
// import Calendar from './pages/Calendar/Calendar';
import Admin from './pages/Admin/Admin';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Experiment from './pages/Experiment/Experiment';


const App = () => {

  return <div id="dashboard">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/experiment" element={<Experiment />} />
        </Route>
        <Route path="/login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  </div>
};

export default App;
