import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark', // Set to 'dark' for dark mode
    },
    // Customize other theme properties as needed
});

export default function SignUp({ onBackToSignIn }) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
                <CssBaseline />
                <Grid item md={6} component={Box} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box
                        component="form"
                        elevation={6}
                        onSubmit={handleSubmit}
                        sx={{
                            textAlign: 'center',
                            backgroundColor: 'transparent',
                            borderRadius: 8,
                            height: '90%',
                            width: '80%',
                            boxShadow: 'none'
                        }}
                    >
                        <Avatar sx={{ m: 'auto', width: '50px', height: '50px', bgcolor: 'secondary.main', mt: 6 }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5" sx={{ mt: 4 }}>
                            Sign up
                        </Typography>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="firstName"
                            label="First Name"
                            name="firstName"
                            autoComplete="given-name"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="lastName"
                            label="Last Name"
                            name="lastName"
                            autoComplete="family-name"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="new-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, height: '3rem', fontSize: '1rem' }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Typography variant="body2" sx={{ mt: 3, fontSize: '1rem', textAlign: 'right' }}>
                                    Already have an account? <Link onClick={onBackToSignIn} style={{ cursor: 'pointer' }}>Sign In</Link>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}
