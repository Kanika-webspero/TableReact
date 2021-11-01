import * as React from 'react';
import Grid from '@mui/material/Grid';


export default function BasicGrid({ leftSide, rightSide }) {
  return (
      <Grid container >
        <Grid item xs={6}>
        {leftSide}
        </Grid>
        <Grid item xs={6}>
         {rightSide}
        </Grid>
      </Grid>

  );
}
