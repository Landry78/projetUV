import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import BedIcon from '@mui/icons-material/Bed';
import ApartmentIcon from '@mui/icons-material/Apartment';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';

import './style.css'; // Importez les styles CSS pour le DashboardDrawer

const DashboardDrawer = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div className='DashboardDrawer'>
      <IconButton onClick={toggleDrawer} className={`dashboard-drawer ${open ? 'open' : ''}`}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={open} onClose={toggleDrawer} className={`dashboard-drawer ${open ? 'open' : ''}`}>
        <div className="drawer-content">
          <IconButton className="drawer-close-button" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <List>
            <ListItem button className="drawer-item">
              <ListItemIcon><BedIcon /></ListItemIcon>
              <ListItemText className="drawer-item-text" primary="Chambre" />
            </ListItem>
            <ListItem button className="drawer-item">
              <ListItemIcon><ApartmentIcon /></ListItemIcon>
              <ListItemText className="drawer-item-text" primary="Appartement" />
            </ListItem>
            <ListItem button className="drawer-item">
              <ListItemIcon><HomeIcon /></ListItemIcon>
              <ListItemText className="drawer-item-text" primary="Studio" />
            </ListItem>
            <ListItem button className="drawer-item">
              <ListItemIcon><MailIcon /></ListItemIcon>
              <ListItemText className="drawer-item-text" primary="Messagerie" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default DashboardDrawer;
