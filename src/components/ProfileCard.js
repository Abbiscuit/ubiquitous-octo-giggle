import React from 'react';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import FormDialog from './FormDialog';

const ProfileCard = () => {
  return (
    <Card style={{ marginBottom: 8, marginTop: -8 }} elevation={0} square>
      <CardMedia
        style={{ height: 0, paddingTop: '56.25%' }}
        image="https://images.unsplash.com/photo-1502323777036-f29e3972d82f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
        title="User name"
      />
      <CardContent>
        <Typography gutterBottom>
          食べ歩き
          <span role="img" aria-label="rice">
            🍚
          </span>
          や写真を撮影
          <span role="img" aria-label="camera">
            📸
          </span>
          することが大好きです。 食べ歩き
          <span role="img" aria-label="rice">
            🍚
          </span>
          や写真を撮影
          <span role="img" aria-label="camera">
            📸
          </span>
          することが大好きです。
        </Typography>
      </CardContent>
      <CardActions>
        <div style={{ flex: 1 }}>
          <Button>ツイート</Button>
          <Button>いいね</Button>
        </div>
        <FormDialog />
      </CardActions>
    </Card>
  );
};

export default ProfileCard;
