import React from 'react';

import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom';
import { useStyles } from './styles'

export default function Header({ signedIn, onSignOut }) {
  const classes = useStyles();

  const onClick = () => {
    if (signedIn && onSignOut) {
      onSignOut();
    }
  };

  return (
    <React.Fragment>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <div className={classes.toolbarMenuList}>
            <div className={classes.toolbarElement}>
              <Typography
                variant="h6"
                color="inherit"
                noWrap
                component={RouterLink}
                to="/"
              >
                App
              </Typography>
            </div>
            {signedIn && <div className={classes.toolbarElement}>
              <Typography
                variant="h6"
                color="inherit"
                noWrap
                component={RouterLink}
                to="/todos"
              >
                Todos
              </Typography>
            </div>}
            
          </div>
          <Button
            color="primary"
            variant="outlined"
            className={classes.link}
            component={RouterLink}
            to={signedIn ? '/' : '/signin'}
            onClick={onClick}
          >
            {signedIn ? 'Logout' : 'Login'}
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
