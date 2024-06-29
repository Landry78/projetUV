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
       
            <PublishForm />
         
      </Container>
      <Footer />
    </div>
  );
};

export default PublishPage;
