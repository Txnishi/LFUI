import moment from "moment/moment";
import css from "./Layout.module.css";
// import { BiSearch } from "react-icons/bi";
import Sidebar from "../Sidebar/Sidebar";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const Layout = () => {

  const { pathname } = useLocation();


  return (
    <div className={css.container}>
      {/* <div className={css.cont}>

      </div> */}
      <Sidebar />


      {/* making the dashboard as the default route */}
      {pathname === "/" && <Navigate to="/dashboard" />}


      <div className={css.dashboard}>
        <div className={css.topBaseGradients}>
          <div className="gradient-red"></div>
          <div className="gradient-orange"></div>
          <div className="gradient-blue"></div>
        </div>

        <div style={{ padding: '1rem', borderRadius: '20px', margin: '30px 80px' }} className={`${css.header} theme-container`}>

          <span>{moment().format("dddd, Do MMM YYYY")}</span>

          <div /*className={css.searchBar}*/>
            {/* <BiSearch size={20} /> */}
            <img
              width="200px"
              src="./logo.png" alt="logo image" />
            {/* <input type="text" placeholder="Search" /> */}
          </div>


          <div>
            <button className={`${css.logout} ${css.l_bt}`} ><span>Log out</span></button>
          </div>

          {/* <div className={css.profile}>
            <img src="./profile.png" alt="logo image" />
            <div className={css.details}>
              <span>Denis Steven</span>
              <span>devissteven@gmail.com</span>
            </div>
          </div> */}


        </div>


        <div className={css.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
