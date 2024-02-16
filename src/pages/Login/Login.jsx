import MapChart from '../../components/MapChart/MapChart';
import SignIn from '../../components/SignIn/SignIn';
import css from './Login.module.css';
import { useEffect } from 'react';



function Login() {

    console.log('LOGIN PAGE');
    return (
        <div>
            <SignIn />
            <MapChart />
        </div>
    );
}

export default Login;