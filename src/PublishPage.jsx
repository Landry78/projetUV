import React from 'react';
import { Container, Box, Typography, Paper } from '@mui/material';
import Navbar from './components/Navbar';
import Footer from './components/Footer.jsx';
import PublishForm from './components/PublishForm';

const PublishPage = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Box sx={{ mt: 4 }}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h4" sx={{ mb: 2 }}>Publier une offre</Typography>
            <PublishForm />
          </Paper>
        </Box>
      </Container>
      <Footer />
    </div>
  );
};

export default PublishPage;
