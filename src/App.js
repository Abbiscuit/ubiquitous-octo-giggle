import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import CssBaseline from '@material-ui/core/CssBaseline';
import HeaderDrawer from './components/HeaderDrawer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Feed from './components/Feed';
import { auth } from './firebase/firebase.utils';
import Favorites from './pages/Favorites';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(userAuth => {
      setCurrentUser(userAuth);

      return () => unsubscribeFromAuth;
    });
  }, []);

  const params = { currentUser };
  return (
    <React.Fragment>
      <CssBaseline />
      <HeaderDrawer currentUser={currentUser}>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route
            exact
            path="/profile"
            render={props =>
              currentUser ? (
                <Profile {...props} {...params} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            exact
            path="/favorites"
            render={props =>
              currentUser ? (
                <Favorites {...props} {...params} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            exact
            path="/login"
            render={props =>
              currentUser ? <Redirect to="/" /> : <Login {...props} />
            }
          />
          <Route exact path="/signup" render={() => <Signup />} />
          <Route exact path="/feed" render={() => <Feed />} />
        </Switch>
      </HeaderDrawer>
    </React.Fragment>
  );
};

export default App;
