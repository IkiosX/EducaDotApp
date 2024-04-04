// Profile.js
import React, { useContext } from 'react';
import { UserContext } from '../components/private_route/user_access_state';
import { handleLogout } from '../services/sessionsStorage';
import SideChat from '../components/chat/SideChat'
import './Profile.css';

const Profile = () => {
    const { user } = useContext(UserContext);

    if (!user) {
        return <div className="login-prompt">Please log in.</div>;
    }

    return (
        <div className="profile-container">
            <nav className="profile-nav">
                <a href="/" className="nav-item">Home</a>
                {/* Additional navigation items */}
                <button onClick={handleLogout} className="nav-item logout-button">Logout</button>
            </nav>

            <div className="profile-content">
                {/* User greeting and profile card */}
                <div className="profile-card">
                    <h1 className="greeting">Welcome, {user.email}!</h1>
                    <div className="profile-pic-upload">
                        <div className="profile-pic-container">
                            {/* Profile picture placeholder */}
                        </div>
                        <button className="upload-btn">Upload Picture</button>
                    </div>
                </div>

                {/* File cards section with hover effects */}
                <div className="files-section">
                    <h2>Your Files</h2>
                    <div className="files-list">
                        <div className="file-card">File 1</div>
                        <div className="file-card">File 2</div>
                        {/* Additional file cards */}
                    </div>
                </div>

                {/* Animated floating action button */}
                <button className="fab">+</button>
            </div>

            <footer className="profile-footer">
                <span>EducaApp © {new Date().getFullYear()}</span>
            </footer>
            <SideChat />
        </div>
    );
};

export default Profile;
