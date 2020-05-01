import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { userRegister } from '../../redux/authetication/action'


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Sudhir copyright
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


function SignUp(props) {
    const classes = useStyles();
    
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const userRegister = (e) => {
        e.preventDefault()
        const user = {
            "username": username,
            "email":email,
            "password":password
        }
        props.userRegister(user)
        setUsername("")
        setEmail("")
        setPassword("")
    }

  return (
    <Container component="main" maxWidth="xs" className="py-4">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
            Register
        </Typography>
        <form className={classes.form} noValidate>
            <TextField
                variant="outlined"
                margin="normal"
                color="secondary"
                required
                fullWidth
                value = {username}
                id="name"
                label="Full Name"
                name="name"
                onChange = {(e)=> setUsername(e.target.value)}
                autoComplete="username"
                autoFocus
          />
            <TextField
                variant="outlined"
                margin="normal"
                color="secondary"
                required
                fullWidth
                value = {email}
                id="email"
                label="Email Address"
                name="email"
                onChange = {(e) => setEmail(e.target.value)}
            />
            <TextField
                variant="outlined"
                margin="normal"
                color="secondary"
                required
                value = {password}
                fullWidth
                onChange = {(e) => setPassword(e.target.value)}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
            />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            onClick = {(e) => userRegister(e)}
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
            </Grid>
            <Grid item>
              <Link to="/user/login">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  )
};


const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth
})

const mapDispatchToProps = dispatch =>({
  userRegister: (payload) => dispatch(userRegister(payload))
})

export default connect(mapStateToProps,mapDispatchToProps)(SignUp)