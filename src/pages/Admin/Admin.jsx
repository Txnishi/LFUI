import React from "react";
import css from './Admin.module.css';

const AdminPage = () =>{


    return(
        <div className="container ">
            <div className="customButton">
                <span><button className="train">Training</button></span>
            </div>
            <div className="customButton">
            <span><button className="Pred">Prediction</button></span>
            </div>
            
        </div>
    )
}
export default AdminPage