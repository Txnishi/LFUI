import React, { useState } from 'react';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp'; // Import SignUp component
// import ForgotPassword from '../../components/ForgotPassword/ForgotPassword'; // Import ForgotPassword component
import MapChart from '../../components/MapChart/MapChart';

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
        <div>
            {showSignIn && (
                <SignIn
                    // onForgotPassword={handleForgotPassword}
                    onSignUp={handleSignUp}
                />
            )}
            {showSignUp && <SignUp onBackToSignIn={handleBackToSignIn} />}
            {/* {showForgotPassword && (
                <ForgotPassword onBackToSignIn={handleBackToSignIn} />
            )} */}
            <MapChart />
        </div>
    );
}

export default Login;
