// src/setUpTests.js
import FirebaseMock from 'firebase-mock';


const mockAuth = new FirebaseMock.MockAuthentication();
const mockFirestore = new FirebaseMock.MockFirestore();

// Mock Firebase implementation
jest.mock('firebase/app', () => {
  return {
    auth: () => mockAuth,
    firestore: () => mockFirestore,
    
  };
});


