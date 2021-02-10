import { useAuth0 } from '@auth0/auth0-react';

export default function App() {
    const { isAuthenticated, isLoading, logout, loginWithRedirect, getAccessTokenSilently } = useAuth0();
    if (isLoading) return null;

    if (isAuthenticated) {
        getAccessTokenSilently({
            audience: new URL(process.env.REACT_APP_TEST_API || '').host,
            scope: 'read:test',
        }).then((token) => console.log(token));

        return (
            <div>
                <h1>Logged in</h1>
                <button onClick={() => logout({ returnTo: window.location.origin })}>logout</button>
            </div>
        );
    }
    loginWithRedirect();
    return null;
}
