import React, { useState } from 'react';
import css from './Login.module.css';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp'; // Import SignUp component
// import ForgotPassword from '../../components/ForgotPassword/ForgotPassword'; // Import ForgotPassword component
import MapChart from '../../components/MapChart/MapChart';
import NeuralNetwork from '../../components/NeuralNetwork/NeuralNetwork';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei'
import ParticlesBackground from '../../components/Particles/particlesBackground';
import { Sphere } from '@react-three/drei';

function Login() {
    const [showSignIn, setShowSignIn] = useState(true);
    const [showSignUp, setShowSignUp] = useState(false);
    const [showForgotPassword, setShowForgotPassword] = useState(false);

    const handleForgotPassword = () => {
        setShowForgotPassword(true);
        setShowSignIn(false);
        setShowSignUp(false);
    };

    const handleSignUp = () => {
        setShowSignUp(true);
        setShowSignIn(false);
        setShowForgotPassword(false);
    };

    const handleBackToSignIn = () => {
        setShowSignIn(true);
        setShowSignUp(false);
        setShowForgotPassword(false);
    };


    return (
        <div className={`${css.bg}`} style={{ position: 'relative', height: '100vh', display: 'flex' }}>

            {/* <ParticlesBackground style={{ position: 'absolute', zIndex: -1, width: '100%', height: '100%' }} /> */}
            {/* <div className={`${css.aurora}`}></div> */}

            {/* <img src="/logo.png" alt="layour-logo" /> */}
            <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', zIndex: 6 }}>
                {/* {showSignIn && <SignIn onSignUp={handleSignUp} />}
                {showSignUp && <SignUp onBackToSignIn={handleBackToSignIn} />} */}
                {showSignIn && (
                    <SignIn
                        onForgotPassword={handleForgotPassword}
                        onSignUp={handleSignUp}
                    />
                )}
                {showSignUp && <SignUp onBackToSignIn={handleBackToSignIn} />}
                {showForgotPassword && (
                    <ForgotPassword onBackToSignIn={handleBackToSignIn} />
                )}
            </div>

            {/* <div style={{ flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 5 }}> */}
            <div style={{ position: 'absolute', top: 0, left: '27%', width: '100%', height: '100%', zIndex: 5 }}>
                <Canvas camera={{ position: [0, 0, 19] }} style={{ position: 'absolute', top: 0, left: 0, zIndex: 5 }}>
                    <NeuralNetwork />
                    <NeuralNetwork otherMesh={<Sphere scale={[8, 8, 8]} />} />
                    <OrbitControls
                        minDistance={18.75}
                        maxDistance={18.75} />
                </Canvas>

            </div>
            {/* <MapChart style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }} /> */}
            {/* </div> */}

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