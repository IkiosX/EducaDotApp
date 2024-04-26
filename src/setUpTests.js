// src/setUpTests.js
import FirebaseMock from 'firebase-mock';

// Mock the Firebase services you use
const mockAuth = new FirebaseMock.MockAuthentication();
const mockFirestore = new FirebaseMock.MockFirestore();

// Mock Firebase implementation
jest.mock('firebase/app', () => {
  return {
    auth: () => mockAuth,
    firestore: () => mockFirestore,
    // Include other Firebase services as needed
  };
});

// Reset the mocks before each test
beforeEach(() => {
  mockAuth.autoFlush();
  mockFirestore.autoFlush();
});
