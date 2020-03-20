import React, { useState } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { signInWithGoogle, auth } from '../firebase/firebase.utils';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = e => {
    e.preventDefault();

    console.log(credentials);

    auth
      .signInWithEmailAndPassword(email, password)
      .then(result => console.log(result.credential))
      .catch(err => console.error(err));

    setCredentials({
      email: '',
      password: ''
    });
  };

  const handleChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const { email, password } = credentials;

  return (
    <div
      style={{
        padding: '0 10px'
      }}
    >
      <Card style={{ marginBottom: 24 }}>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <TextField
              name="email"
              type="email"
              label="メールアドレス"
              fullWidth
              required
              autoComplete="email"
              onChange={handleChange}
              value={email}
            />
            <TextField
              name="password"
              type="password"
              label="パスワード"
              fullWidth
              required
              autoComplete="current-password"
              onChange={handleChange}
              value={password}
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
              ログイン
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
