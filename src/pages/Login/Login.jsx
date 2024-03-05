import React, { useState } from 'react';
import css from './Login.module.css';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp'; // Import SignUp component
// import ForgotPassword from '../../components/ForgotPassword/ForgotPassword'; // Import ForgotPassword component
import MapChart from '../../components/MapChart/MapChart';
import ParticlesBackground from '../../components/Particles/particlesBackground';

function Login() {
    const [showSignIn, setShowSignIn] = useState(true);
    const [showSignUp, setShowSignUp] = useState(false);
    // const [showForgotPassword, setShowForgotPassword] = useState(false);

    // const handleForgotPassword = () => {
    //     setShowForgotPassword(true);
    //     setShowSignIn(false);
    //     setShowSignUp(false);
    // };

    const handleSignUp = () => {
        setShowSignUp(true);
        setShowSignIn(false);
        // setShowForgotPassword(false);
    };

    const handleBackToSignIn = () => {
        setShowSignIn(true);
        setShowSignUp(false);
        // setShowForgotPassword(false);
    };

    return (
        <div style={{ position: 'relative', height: '100vh', display: 'flex' }}>
            <ParticlesBackground style={{ position: 'absolute', zIndex: -1, width: '100%', height: '100%' }} />
            {/* <div className={`${css.aurora}`}></div> */}
            <div style={{ flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2 }}>
                {showSignIn && <SignIn onSignUp={handleSignUp} />}
                {showSignUp && <SignUp onBackToSignIn={handleBackToSignIn} />}
            </div>
            <div style={{ flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 5 }}>
                <MapChart />
            </div>
        </div>
    );
}

export default Login;

// <div>
//     {showSignIn && (
//         <SignIn
//             // onForgotPassword={handleForgotPassword}
//             onSignUp={handleSignUp}
//         />
//     )}
//     {showSignUp && <SignUp onBackToSignIn={handleBackToSignIn} />}
//     {/* {showForgotPassword && (
//         <ForgotPassword onBackToSignIn={handleBackToSignIn} />
//     )} */}
//     <MapChart />
//     <ParticlesBackground />
// </div>