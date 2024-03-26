import React, { useState } from 'react';
import img2 from "./images/logo.gif";
import styles from "./Studentlogin.css";

function LoginPage() { 
    const [loginId, setLoginId] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginIdChange = (event) => {
        setLoginId(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your form submission logic here                 
    };

    const handleMicClick = () => {
        // Add your speech recognition logic here
    };

    return (
        <div className="background-image-container">
        <div className="styles.container">
            <img src={img2} alt="Logo" className="logo" />
            <h1><b>STUDENT LOGIN</b></h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="loginId">Login ID:</label>
                <div className="styles.input-container">
                <i>
                    <input
                        type="text"
                        id="loginId"
                        name="loginId"
                        value={loginId}
                        onChange={handleLoginIdChange}
                        required
                    />
                    </i>
                </div>

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                    pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&!])[A-Za-z\d@#$%^&!]{8,}$"
                    
                />

                <input type="submit" value="Submit" />

                <div className="styles.login-container">
                    <div className="styles.button-container">
                        <button className="btn btn-lg" onClick={() => window.history.back()}><b>BACK</b></button>
                    </div>
                </div>
            </form>
        </div>
        </div>
    );
}

export default LoginPage;
