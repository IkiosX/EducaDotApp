import React from 'react';
import ReactDOM from 'react-dom/client';
import { UserProvider } from './components/private_route/user_access_state';
import './index.css';
import App from './components/main/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>,
  </React.StrictMode>
);


