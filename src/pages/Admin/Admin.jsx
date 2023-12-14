import React from "react";
import css from './Admin.module.css';

const AdminPage = () => {


    return (
        <div className={`${css.container} `} >
            <div className={`${css.customButton}`}>
                <span><button className={`${css.train}`}>Training</button></span>
            </div>
            <div className={`${css.customButton}`}>
                <span><button className={`${css.pred}`}>Prediction</button></span>
            </div>

        </div>
    )
}
export default AdminPage