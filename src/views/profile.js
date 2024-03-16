// Profile.js
import React, { useContext } from 'react';
import { UserContext } from '../components/private_route/user_access_state';
import './Profile.css'; // Updated CSS for animations and modern UI

const Profile = () => {
    const { user } = useContext(UserContext);

    if (!user) {
        return <div className="login-prompt">Please log in.</div>;
    }

    return (
        <div className="profile-container">
            <nav className="profile-nav">
                <a href="/home" className="nav-item">Home</a>
                {/* Additional navigation items */}
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
                <span>Your Application's Name © {new Date().getFullYear()}</span>
            </footer>
        </div>
    );
};

export default Profile;
