import React from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button, Typography, Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import { GoogleIcon } from './GoogleIcon'; // Assuming you have an icon component for Google

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(8),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  googleButton: {
    marginTop: theme.spacing(2),
    backgroundColor: '#fff',
    color: '#000',
    '&:hover': {
      backgroundColor: '#f0f0f0',
    },
  },
}));

const Login = ({handleLogin}) => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs" className={classes.container}>
      <div>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            InputProps={{
              classes: {
                root: classes.inputRoot,
                input: classes.inputInput,
              },
              inputProps: { style: { borderRadius: '20px' } },
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            InputProps={{
              classes: {
                root: classes.inputRoot,
                input: classes.inputInput,
              },
              inputProps: { style: { borderRadius: '20px' } },
            }}
          />
          <Button fullWidth variant="contained" onClick={handleLogin}>
            {/* <GoogleIcon /> */}
            Login
          </Button>
          <Grid container justify="space-between" alignItems="center">
            <Grid item>
              <Link to="/forgot-password">Forgot password?</Link>
            </Grid>
            <Grid item>
              <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                Sign In
              </Button>
            </Grid>
          </Grid>
          <Button fullWidth variant="contained" className={classes.googleButton}>
            {/* <GoogleIcon /> */}
            Sign in with Google
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Login;
