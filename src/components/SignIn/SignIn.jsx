import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark', // Set to 'dark' for dark mode
    },
    // Customize other theme properties as needed
});

export default function SignIn({ onSignUp }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (email === 'shubham.bhatt@radius.co.in' && password === 'password1') {
            console.log('Login successful');
            navigate('/layout/dashboard');
        } else {
            console.log('Invalid email or password');
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh', width: '100vh' }}>
                <CssBaseline />
                <Grid item md={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Paper elevation={2} sx={{ p: 4, textAlign: 'center', backgroundColor: '#09090a', borderRadius: 0, height: '100%', width: '100%' }}>
                        <Avatar sx={{ m: 'auto', width: '50px', height: '50px', bgcolor: 'secondary.main', mt: 35, '.MuiSvgIcon-root': { fontSize: '30px' } }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5" sx={{ mt: 4 }}>
                            Sign in
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 2, display: 'flex', flexDirection: 'column', ml: 25 }}>
                            <TextField
                                margin="normal"
                                required
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                value={email}
                                onChange={handleEmailChange}
                                sx={{ width: 'calc(100% - 250px)' }}
                            />
                            <TextField
                                margin="normal"
                                required
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={handlePasswordChange}
                                sx={{ width: 'calc(100% - 250px)' }}
                            />
                            <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
                            <Button type="submit" variant="contained" sx={{ mt: 3, ml: 32, width: 'calc(100% - 700px)', height: '3rem', fontSize: '1rem' }}>
                                Sign In
                            </Button>
                            <Link href="#" variant="body2" sx={{ mt: 2, ml: 32, fontSize: '1rem', textAlign: 'right', mr: 25 }}>
                                Forgot password?
                            </Link>
                            <Typography variant="body2" sx={{ mt: 2, fontSize: '1rem', textAlign: 'right', mr: 25 }}>
                                Don't have an account? <Link onClick={onSignUp} style={{ cursor: 'pointer' }}>Sign Up</Link>
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}
