import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout';
import Calendar from './pages/Calendar/Calendar';
import Admin from './pages/Admin/Admin';
// import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import DataGrid from './pages/DataGrid/DataGrid';


const App = () => {

  return <div id="dashboard">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route path="dashboard" element={<Dashboard />} />
          <Route path="admin" element={<Admin />} />
          {/* <Route path="login" element={<Login />} /> */}
          <Route path="calendar" element={<Calendar />} />
          <Route path="users" element={<DataGrid />} />

        </Route>

      </Routes>
    </BrowserRouter>
  </div>
};

export default App;
