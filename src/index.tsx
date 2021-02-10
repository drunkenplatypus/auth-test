import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <Auth0Provider
            domain={process.env.REACT_APP_OAUTH_DOMAIN || ''}
            clientId={process.env.REACT_APP_OAUTH_CLIENT_ID || ''}
            redirectUri={window.location.origin}
            useRefreshTokens={true}
            cacheLocation="localstorage"
        >
            <App />
        </Auth0Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);
