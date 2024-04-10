import React from "react";
import css from './Admin.module.css';

const AdminPage = () => {


    return (
        <div className={`${css.mainContainer}`}>

            <div className={`${css.container}  grey-container`} >
                {/* <div className={`${css.customButton}`}>
                    <span><button className={`${css.train}`}>Training</button></span>
                </div> */}
                <div className={`${css.customButton}`}>
                    <span><button className={`${css.pred}`}>Prediction</button></span>
                </div>

            </div>
            <div className={`${css.container}  grey-container`} >

                <div className={`${css.customButton}`}>
                    <span><button className={`${css.pred}`}>Prediction</button></span>
                </div>

            </div>
        </div>
    )
}
export default AdminPage