import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { signInWithGoogle } from '../firebase/firebase.utils';

const Login = () => {
  return (
    <div
      style={{
        padding: '0 10px'
      }}
    >
      <Card style={{ marginBottom: 24 }}>
        <form
          onSubmit={e => {
            e.preventDefault();
            console.log('Submitted');
          }}
        >
          <CardContent>
            <TextField
              type="email"
              label="Email"
              fullWidth
              required
              autoComplete="email"
            />
            <TextField
              type="password"
              label="Password"
              fullWidth
              required
              autoComplete="current-password"
            />
          </CardContent>
          <CardActions>
            <Button
              type="submit"
              color="primary"
              size="small"
              variant="contained"
              fullWidth
            >
              Login
            </Button>
          </CardActions>
        </form>
      </Card>
      <Box>
        <Button
          size="small"
          variant="outlined"
          color="primary"
          fullWidth
          centerRipple
          onClick={signInWithGoogle}
        >
          Sign in with Google
        </Button>
      </Box>
    </div>
  );
};

export default Login;
