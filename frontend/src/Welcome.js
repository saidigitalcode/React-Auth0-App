import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';

const Welcome = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to the App</h1>

      {!isAuthenticated ? (
        <Button
          variant="contained"
          color="primary"
          onClick={() => loginWithRedirect()}
        >
          Login with Auth0
        </Button>
      ) : (
        <>
          <p>Hello {user.name}, you are logged in!</p>
          <Button
            variant="outlined"
            color="error"
            onClick={() =>
              logout({
                logoutParams: {
                  returnTo: window.location.origin,
                },
              })
            }
            style={{ marginTop: '20px' }}
          >
            Logout
          </Button>
        </>
      )}
    </div>
  );
};

export default Welcome;
