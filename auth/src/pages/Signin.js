import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Signin = ({ onSignin }) => {
  return (
    <Grid container justifyContent="center" alignContent="center" style={{marginTop: 24}}>
      <Grid item xs={4}>
        <form  noValidate autoComplete="off">
          <Grid container>
            <Grid item xs={12}>
              <TextField label="Login" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField type="password" label="Hasło" fullWidth />    
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" component={RouterLink} onClick={onSignin} to={'/todos'} fullWidth>Zaloguj</Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default Signin;