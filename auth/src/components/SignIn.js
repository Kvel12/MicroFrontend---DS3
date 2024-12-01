import React, { useState } from 'react';
import { Paper, TextField, Button, Typography, Container, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useHistory } from 'react-router-dom';

const mockUser = {
  email: 'demo@example.com',
  password: 'demo123'
};

export default function SignIn() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email === mockUser.email && formData.password === mockUser.password) {
      // Simular login exitoso
      localStorage.setItem('isAuthenticated', 'true');
      window.location.href = '/projects/';
    } else {
      setError(true);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper style={{ marginTop: '8px', padding: '20px' }}>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <form onSubmit={handleSubmit}>
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
            value={formData.email}
            onChange={handleChange}
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
            value={formData.password}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: '16px' }}
          >
            Sign In
          </Button>
        </form>
        <Typography variant="body2" style={{ marginTop: '16px', textAlign: 'center' }}>
          Demo credentials: demo@example.com / demo123
        </Typography>
      </Paper>
      <Snackbar open={error} autoHideDuration={6000} onClose={() => setError(false)}>
        <Alert onClose={() => setError(false)} severity="error">
          Invalid credentials. Please try again.
        </Alert>
      </Snackbar>
    </Container>
  );
}