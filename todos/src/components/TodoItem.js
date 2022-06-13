import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';

const TodoItem = ({title, checked, onChange}) => {
  return (
    <Grid container spacing={3} alignContent="center" alignItems="center">
      <Grid item xs={10}>
        <Typography variant="body1" component="p">
            {title}
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Checkbox
          checked={checked}
          onChange={onChange}
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
      </Grid>
    </Grid>
  );
};

export default TodoItem;