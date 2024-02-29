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
        <Grid container component="main" sx={{ height: '100vh' }}>
            <CssBaseline />
            <Grid item md={5} sx={{ margin: 'auto' }}>
                <Paper elevation={2} sx={{ p: 4, textAlign: 'center', backgroundColor: 'white', borderRadius: 20 }}>
                    <Avatar sx={{ m: 'auto', bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" sx={{ mt: 2 }}>
                        Sign in
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={email}
                            onChange={handleEmailChange}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
                            Sign In
                        </Button>
                        <Link href="#" variant="body2" sx={{ mt: 2 }}>
                            Forgot password?
                        </Link>
                        <Typography variant="body2" sx={{ mt: 2 }}>
                            Don't have an account? <Link onClick={onSignUp} style={{ cursor: 'pointer' }}>Sign Up</Link>
                        </Typography>
                    </Box>
                </Paper>
            </Grid>
        </Grid>
    );
}
