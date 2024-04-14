import React, { useContext, useRef, useState, useEffect } from 'react';
import { UserContext } from '../components/private_route/user_access_state';
import { handleLogout } from '../services/sessionsStorage';
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { storage } from '../services/firebase-config';
import SideChat from '../components/chat/SideChat';
import './Profile.css';

const Profile = () => {
    const { user } = useContext(UserContext);
    const fileInputRef = useRef(null);
    const [files, setFiles] = useState([]);

    useEffect(() => {
        if (user) {
            const filesRef = ref(storage, `user-files/${user.uid}/`);
            listAll(filesRef)
                .then(async (res) => {
                    const fileUrls = await Promise.all(res.items.map(item => getDownloadURL(item)));
                    setFiles(fileUrls);
                })
                .catch(error => {
                    console.error("Error fetching files:", error);
                });
        }
    }, [user]);

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const storageRef = ref(storage, `user-files/${user.uid}/${file.name}`);
            try {
                const snapshot = await uploadBytes(storageRef, file);
                const downloadUrl = await getDownloadURL(snapshot.ref);
                console.log('File available at', downloadUrl);
                setFiles(prev => [...prev, downloadUrl]); // Update file list
            } catch (error) {
                console.error('Error uploading file:', error);
            }
        }
    };

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    if (!user) {
        return <div className="login-prompt">Please log in.</div>;
    }

    return (
        <div className="profile-container">
            <nav className="profile-nav">
                <a href="/" className="nav-item">Home</a>
                <button onClick={handleLogout} className="nav-item logout-button">Logout</button>
            </nav>

            <div className="profile-content">
                <div className="profile-card">
                    <h1 className="greeting">Welcome, {user.email}!</h1>
                    <div className="profile-pic-upload">
                        <div className="profile-pic-container">
                            {/* Profile picture placeholder */}
                        </div>
                        <button className="upload-btn">Upload Picture</button>
                    </div>
                </div>

                <div className="files-section">
                <div className="files-header">
                        <h2>Your Files</h2>
                        <button className="fab" onClick={handleButtonClick}>+</button>
                    </div>
                    <div className="files-list">
                        {files.map((fileUrl, index) => (
                            <div key={index} className="file-card">
                                <a href={fileUrl} target="_blank" rel="noopener noreferrer">File {index + 1}</a>
                            </div>
                        ))}
                    </div>
                </div>

                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                />
                
            </div>

            <footer className="profile-footer">
                <span>EducaApp © {new Date().getFullYear()}</span>
            </footer>
            <SideChat />
        </div>
    );
};

export default Profile;
