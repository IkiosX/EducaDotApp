import React, { useState, useEffect } from 'react';
import { db, auth } from '../../services/firebase-config';
import { collection, addDoc, serverTimestamp, query, orderBy, onSnapshot } from "firebase/firestore";
import './SideChat.css';

const SideChat = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    // Assuming these are the UIDs of the two users chatting
    const userOne = "alwhe6fQ9lfjeVo6a0qBlCnyl5u1";
    const userTwo = "wElIX6tKWKNfKjrjdhJdh7cP9GE3";
    const chatRoomId = [userOne, userTwo].sort().join('_');

    useEffect(() => {
        // Subscribe to the messages within this chatroom
        const messagesRef = collection(db, "Chats", chatRoomId, "messages");
        const q = query(messagesRef, orderBy("createdAt", "asc"));

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const fetchedMessages = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            setMessages(fetchedMessages);
        });

        // Clean up the subscription on unmount
        return () => unsubscribe();
    }, [chatRoomId]); // Empty dependency array means this effect runs once on mount

    const toggleChat = () => setIsExpanded(!isExpanded);

    const sendMessage = async (e) => {
        e.preventDefault();

        // Prevent sending an empty message
        if (!newMessage.trim()) return;

        const messagesRef = collection(db, "Chats", chatRoomId, "messages");

        try {
            await addDoc(messagesRef, {
                text: newMessage,
                sender: auth.currentUser.uid,
                createdAt: serverTimestamp()
            });
            setNewMessage('');  // Clear input after sending
        } catch (error) {
            console.error("Error sending message: ", error);
        }
    };

    return (
        <div className={`chat-box ${isExpanded ? 'expanded' : ''}`}>
            <div className="chat-header" onClick={toggleChat}>ChatBot</div>
            {isExpanded && (
                <>
                    <div className="messages-container">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`message ${msg.sender === auth.currentUser.uid ? 'my-message' : ''}`}>
                                {msg.text}
                            </div>
                        ))}
                    </div>
                    <div className="message-input-container">
                        <input
                            type="text"
                            className="message-input"
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            placeholder="Send a message..."
                        />
                        <button className="send-button" onClick={sendMessage}>Send</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default SideChat;
