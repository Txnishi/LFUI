import moment from "moment/moment";
import css from "./Layout.module.css";
// import { BiSearch } from "react-icons/bi";
import Sidebar from "../Sidebar/Sidebar";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import React, { useState } from "react";

const Layout = () => {

  const { pathname } = useLocation();
  const [selectedDashboard, setSelectedDashboard] = useState('npcldashboard');
  const [npclLogoWidth, setNpclLogoWidth] = useState("90px");
  const [jdvvnlLogoWidth, setJdvvnlLogoWidth] = useState("70px");


  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleLogout = () => {
    window.location.href = "/";
  };


  const getDashboardImage = (npclLogoWidth, jdvvnlLogoWidth) => {
    if (pathname === '/' || selectedDashboard === 'npcldashboard') {
      return { path: '/npcl.png', width: npclLogoWidth };
    } else if (selectedDashboard === 'jdvvnldashboard') {
      return { path: '/jd_logo.png', width: jdvvnlLogoWidth };
    }
  };

  const dashboardImage = getDashboardImage(npclLogoWidth, jdvvnlLogoWidth);


  return (
    <div className={css.container}>
      <Sidebar setSelectedDashboard={setSelectedDashboard} />


      {pathname === "/" && <Navigate to="/npcldashboard" />}


      <div className={css.dashboard}>
        <div className={css.topBaseGradients}>
          <div className="gradient-red"></div>
          <div className="gradient-orange"></div>
          <div className="gradient-blue"></div>
        </div>

        <div style={{ padding: '1rem', borderRadius: '20px', margin: '30px 80px' }} className={`${css.header} theme-container`}>

          <span>{moment().format("dddd, Do MMM YYYY")}</span>

          <div >

            <img
              width={dashboardImage.width}
              src={dashboardImage.path}
              alt="layour-logo" />
          </div>


          <div>
            <button className={`${css.logout} ${css.l_bt}`} onClick={() => setShowConfirmation(true)}><span>Sign out</span></button>
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

      {showConfirmation && (
        <div className={css.popupBackground}>
          <div className={css.popup}>
            <p>Are you sure you want to sign out?</p>
            <div>
              <button onClick={handleLogout}>Yes</button>
              <button onClick={() => setShowConfirmation(false)}>No </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
