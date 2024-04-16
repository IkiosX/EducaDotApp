import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import './logIn.css';  // Assuming you're using the refactored CSS

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();
    const auth = getAuth();

    const handleRegister = async (event) => {
        event.preventDefault();

        // Check if passwords match
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log('User created:', userCredential.user);
            // Redirect or update UI as needed
        } catch (error) {
            console.error('Error registering:', error.message);
            // Handle registration errors
        }
    };
    const goBack = () => navigate(-1);
    return (
        <div className="login-container"> {/* Using login CSS classes */}
            <form className="login-form" onSubmit={handleRegister}>

                <input
                    type="email"
                    placeholder="Email"
                    className="login-input"
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
                <input
                    type="password"
                    placeholder="Confirm Password"
                    className="login-input"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button onClick={goBack} type="button" className="back-button">Back</button>
                <button type="submit" className="login-button">Register</button>
            </form>
        </div>
    );
};

export default Register;
