// components/About.js
import React from 'react';
import { Paper, Typography } from '@material-ui/core';

function About() {
  return (
    <Paper style={{ padding: '20px' }}>
      <Typography variant="h6" gutterBottom>
        About Page
      </Typography>
      <Typography paragraph>
        This page provides information about the dataset used, JavaScript libraries used, and other resources.
      </Typography>
    </Paper>
  );
}

export default About;
