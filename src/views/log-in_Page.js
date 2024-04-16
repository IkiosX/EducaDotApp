
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../services/firebase-config'; // Adjust the path based on the actual file location

import { signInWithEmailAndPassword } from 'firebase/auth';


import './logIn.css';

const LogIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        console.log("attempt to log in ------>")
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log(userCredential.user);  // User is logged in
            // Redirect to another page or update UI
            navigate('/profile');
        } catch (error) {
            console.error(error.message);
            // Handle errors (e.g., user not found, wrong password)
        }
    };
    const goBack = () => {
        navigate(-1);
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    className="login-input"  // Presuming you might have CSS for inputs
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="login-input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                 <button onClick={goBack} className="back-button">Back</button>
                <button type="submit" className="login-button">Log In</button>
               

                {/* Removed guest login for standard email/password flow */}
            </form>
        </div>
    )
}

export default LogIn;