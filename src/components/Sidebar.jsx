import React from 'react';
import { List, ListItem, ListItemText, Box } from '@mui/material';

const Sidebar = () => {
  return (
    <Box className="Sidebar">
      <List component="nav">
        <ListItem button>
          <ListItemText primary="Messages reçus" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
