import { auth } from './firebase-config';
import { onAuthStateChanged } from 'firebase/auth';

export const setSession = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
};

export const getUser = () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
};

export const clearSession = () => {
    localStorage.removeItem('user');
};

export const subscribeToAuthChanges = (handleAuthChange) => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setSession(user);
        } else {
            clearSession();
        }
        handleAuthChange(user);
    });
};

// Function to log out the user
export const handleLogout = async (onSuccess) => {
    try {
        await auth.signOut();
        console.log("User signed out.");
        if (onSuccess) onSuccess();
    } catch (error) {
        console.error('Error signing out:', error);
    }
};
