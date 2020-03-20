import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    backgroundColor: theme.palette.background.paper
  }
}));

const Comments = () => {
  const classes = useStyles();

  return (
    <div>
      <List className={classes.root}>
        <ListItem disableGutters>
          <ListItemAvatar>
            <Avatar src="https://images.unsplash.com/photo-1535268244390-8b989b92d2bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"></Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="山田太郎"
            secondary="明日は最終試験日！本気で挑戦してみよう！"
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem disableGutters>
          <ListItemAvatar>
            <Avatar src="https://images.unsplash.com/photo-1505535162959-9bbcb4ab22d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1941&q=80"></Avatar>
          </ListItemAvatar>
          <ListItemText primary="齊藤太郎" secondary="一年に一度の大勝負！" />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem disableGutters>
          <ListItemAvatar>
            <Avatar src="https://images.unsplash.com/photo-1454909516657-78526f214d05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"></Avatar>
          </ListItemAvatar>
          <ListItemText primary="齊藤太郎" secondary="一年に一度の大勝負！" />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem disableGutters>
          <ListItemAvatar>
            <Avatar src="https://images.unsplash.com/photo-1466695108335-44674aa2058b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"></Avatar>
          </ListItemAvatar>
          <ListItemText primary="齊藤太郎" secondary="一年に一度の大勝負！" />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem disableGutters>
          <ListItemAvatar>
            <Avatar src="https://images.unsplash.com/photo-1530047139082-5435ca3c4614?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"></Avatar>
          </ListItemAvatar>
          <ListItemText primary="齊藤太郎" secondary="一年に一度の大勝負！" />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem disableGutters>
          <ListItemAvatar>
            <Avatar src="https://images.unsplash.com/photo-1506442549452-20982ed49ad5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"></Avatar>
          </ListItemAvatar>
          <ListItemText primary="齊藤太郎" secondary="一年に一度の大勝負！" />
        </ListItem>
        <Divider variant="inset" component="li" />
      </List>
    </div>
  );
};

export default Comments;
