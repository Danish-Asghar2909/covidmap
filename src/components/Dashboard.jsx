import React from 'react';
import { Container, Grid } from '@material-ui/core';
import SidePanel from './SidePanel';
import CovidMap from './CovidMap';

function Dashboard() {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <SidePanel />
        </Grid>
        <Grid item xs={7}>
          <CovidMap />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;