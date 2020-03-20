import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import CssBaseline from '@material-ui/core/CssBaseline';
import HeaderDrawer from './components/HeaderDrawer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Feed from './components/Feed';

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <HeaderDrawer test="test">
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/profile" render={() => <Profile />} />
          <Route exact path="/login" render={() => <Login />} />
          <Route exact path="/signup" render={() => <Signup />} />
          <Route exact path="/feed" render={() => <Feed />} />
        </Switch>
      </HeaderDrawer>
    </React.Fragment>
  );
};

export default App;
