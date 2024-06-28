import React, { useState } from 'react';
import { Menu, MenuItem, IconButton, Avatar } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import LogoutIcon from '@mui/icons-material/Logout';

const UserMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="UserMenu">
      <IconButton onClick={handleClick} size="large">
        <Avatar alt="User Name" src="/user-avatar.png" className="UserMenu-avatar" />
        <ArrowDropDownIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>
          <AccountCircleIcon fontSize="small" style={{ marginRight: '8px' }} />
          Consulter compte
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <EditIcon fontSize="small" style={{ marginRight: '8px' }} />
          Modifier compte
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <DeleteIcon fontSize="small" style={{ marginRight: '8px' }} />
          Supprimer compte
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <LogoutIcon fontSize="small" style={{ marginRight: '8px' }} />
          Se déconnecter
        </MenuItem>
      </Menu>
    </div>
  );
};

export default UserMenu;
