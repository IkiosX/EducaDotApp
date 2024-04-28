// UserContext.js
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../../services/firebase-config'; 
import { onAuthStateChanged } from 'firebase/auth';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        // Subscribe to user on mount
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user);
        });

        // Unsubscribe from the listener when unmounting
        return () => unsubscribe();
    }, []);

    return (
        <UserContext.Provider value={{ user: currentUser }}>
            {children}
        </UserContext.Provider>
    );
};
