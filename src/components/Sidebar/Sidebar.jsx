import css from './Sidebar.module.css';
import { MdSpaceDashboard } from "react-icons/md";
import { AiFillCalendar, AiOutlineTable } from "react-icons/ai";
import { FaTasks } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { RiAdminFill } from "react-icons/ri";
import { AiFillExperiment } from "react-icons/ai";
import { RiLoginBoxLine } from "react-icons/ri";
import { AiOutlineExperiment } from "react-icons/ai";
import { MdOutlineSpaceDashboard } from "react-icons/md";
// import { MdAdminPanelSettings } from "react-icons/md";
// import { MdOulineAdminPanelSettings } from "react-icons/md";

const Sidebar = ({ setSelectedDashboard, selectedDashboard }) => {
  return (
    <div className={css.container}>
      <img src={'/logo.png'} alt="sideBar-logo" className={css.logo} />

      <div className={css.menu}>

        <NavLink
          to="npcldashboard"
          className={`${css.item} ${selectedDashboard === 'npcldashboard' ? css.active : ''}`}
          title={'NPCL Dashboard'}
          onClick={() => setSelectedDashboard('npcldashboard')}
        >
          <MdSpaceDashboard size={30} />
        </NavLink>

        <NavLink
          to="jdvvnldashboard"
          className={`${css.item} ${selectedDashboard === 'jdvvnldashboard' ? css.active : ''}`}
          title={"JdVVNL Dashboard"}
          onClick={() => setSelectedDashboard('jdvvnldashboard')}>
          <MdOutlineSpaceDashboard size={31} />
        </NavLink>

        <NavLink
          to="admin"
          className={`${css.item} ${selectedDashboard === 'jdvvnldashboard' ? css.active : ''}`}
          title={'Admin'}
          onClick={() => setSelectedDashboard('admin')}>
          <RiAdminFill size={30} />
          {/* <MdOutlineAdminPanelSettings size={32}/> */}
          {/* <MdAdminPanelSettings size={30}/> */}
        </NavLink>

        <NavLink to="experiment" className={`${css.item} ${selectedDashboard === 'jdvvnldashboard' ? css.active : ''}`} onClick={() => setSelectedDashboard('experiment')} title={'Experiment'}>
          <AiFillExperiment size={30} />

        </NavLink>


      </div>
    </div>
  )
}

export default Sidebar