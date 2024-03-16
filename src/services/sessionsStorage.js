import { auth } from './firebase-config'; // Adjust the import path based on your structure
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
