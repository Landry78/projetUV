import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

const AdminMenu = () => {
  return (
    <List>
      <ListItem button>
        <ListItemIcon>
          <CheckCircleIcon />
        </ListItemIcon>
        <ListItemText primary="Valider un propriétaire" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <PeopleAltIcon />
        </ListItemIcon>
        <ListItemText primary="Liste de propriétaires" />
      </ListItem>
    </List>
  );
};

export default AdminMenu;
