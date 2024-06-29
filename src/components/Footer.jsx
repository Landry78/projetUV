import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ mt: 100, py: 2, backgroundColor: '', textAlign: 'center' }}>
      <Typography variant="body2" color="textSecondary">
        © 2024 NomDuSite. Tous droits réservés.
      </Typography>
    </Box>
  );
};

export default Footer;
