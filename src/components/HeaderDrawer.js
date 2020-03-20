import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Header from './Header';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/firebase.utils';

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  }
});

const HeaderDrawer = ({ children, currentUser }) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });
  const anchor = 'left';

  const toggleDrawer = (anchor, open) => event => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = anchor => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom'
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {/* <List>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="プロフィール" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="ブックマーク" />
        </ListItem>
      </List> */}

      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="ホーム" />
        </ListItem>
        <ListItem button component={Link} to="/profile">
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="プロフィール" />
        </ListItem>
        <ListItem button component={Link} to="/favorites">
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="お気に入り" />
        </ListItem>
      </List>

      {currentUser && (
        <>
          <Divider />

          <List>
            <ListItem button component={Link} to="/">
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText
                primary="ログアウト"
                onClick={() => auth.signOut()}
              />
            </ListItem>
          </List>
        </>
      )}
    </div>
  );

  return (
    <div>
      <Header
        toggleDrawer={toggleDrawer(anchor, true)}
        currentUser={currentUser}
      />
      <SwipeableDrawer
        disableBackdropTransition
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
        onOpen={toggleDrawer(anchor, true)}
      >
        {list(anchor)}
      </SwipeableDrawer>
      {children}
    </div>
  );
};

export default HeaderDrawer;
