import React, { useState } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import AlreadyUser from '../components/AlreadyUser';
import { auth } from '../firebase/firebase.utils';

const Signup = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const onSubmit = e => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('パスワードをご確認ください');
      return;
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then(result => {
        console.log(result.user);
      })
      .catch(err => {
        console.error(err);
      });

    setCredentials({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  const handleChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const { username, email, password, confirmPassword } = credentials;

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
              name="username"
              type="text"
              label="ユーザー名"
              fullWidth
              required
              autoComplete="username"
              onChange={handleChange}
              value={username}
            />
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
            <TextField
              name="confirmPassword"
              type="password"
              label="パスワード(確認）"
              fullWidth
              required
              autoComplete="current-password"
              onChange={handleChange}
              value={confirmPassword}
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
              登録
            </Button>
          </CardActions>
        </Card>
      </form>

      <AlreadyUser />
    </div>
  );
};

export default Signup;
