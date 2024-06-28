import React, { useState } from 'react';
import { Avatar, Button, IconButton } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import '../index.css';

const UserProfileUpload = () => {
  const [profileImage, setProfileImage] = useState(null);

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '10px' }}>
      <input
        accept="image/*"
        style={{ display: 'none' }}
        id="upload-button"
        type="file"
        onChange={handleImageChange}
      />
      <label htmlFor="upload-button">
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
      <Avatar
        src={profileImage}
        alt="Profile Image"
        sx={{ width: 100, height: 100, margin: '10px auto' }}
      />
      {profileImage && (
        <Button variant="contained" color="secondary" onClick={() => setProfileImage(null)}>
          Supprimer
        </Button>
      )}
    </div>
  );
};

export default UserProfileUpload;
