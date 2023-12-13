import css from './Sidebar.module.css';
import { MdSpaceDashboard } from "react-icons/md";
import { AiFillCalendar, AiOutlineTable } from "react-icons/ai";
import { FaTasks } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { RiAdminFill } from "react-icons/ri";
// import { MdAdminPanelSettings } from "react-icons/md";
// import { MdOulineAdminPanelSettings } from "react-icons/md";
const Sidebar = () => {
    return (
        <div className={css.container}>

            <img src="./logo.png" alt="logo" className={css.logo} />


            <div className={css.menu}>
                <NavLink to="dashboard" className={css.item} title={"Dashboard"}>
                    <MdSpaceDashboard size={30} />
                </NavLink>

                <NavLink to="admin" className={css.item} title={'Admin'}>
                    <RiAdminFill size={30}/>
                    {/* <MdOutlineAdminPanelSettings size={32}/> */}
                    {/* <MdAdminPanelSettings size={30}/> */}
                </NavLink>
                
            </div>
        </div>
    )
}

export default Sidebar