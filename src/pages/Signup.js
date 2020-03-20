import React, { useState } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    console.log(username);
    setUsername('');
  };

  const handleChange = e => {
    setUsername(e.target.value);
  };

  return (
    <div
      style={{
        padding: '0 10px'
      }}
    >
      <form onSubmit={onSubmit}>
        <Card style={{ marginBottom: 24 }}>
          <CardContent>
            <TextField
              type="text"
              label="Username"
              fullWidth
              required
              autoComplete="username"
              onChange={handleChange}
              value={username}
            />
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
            <TextField
              type="password"
              label="Confirm Password"
              fullWidth
              required
              autoComplete="current-password"
            />
          </CardContent>
          <CardActions>
            <Button
              type="submit"
              size="small"
              variant="contained"
              color="primary"
              fullWidth
            >
              Signup
            </Button>
          </CardActions>
        </Card>
      </form>

      <Box>
        <Button
          size="small"
          variant="text"
          color="primary"
          fullWidth
          centerRipple
          component={Link}
          to="/login"
        >
          Already have an account?
        </Button>
      </Box>
    </div>
  );
};

export default Signup;
