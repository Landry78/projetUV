import React, { useState } from 'react';
import { TextField, Button, MenuItem, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const PublishForm = () => {
  const [formData, setFormData] = useState({
    city: '',
    type: '',
    description: '',
    price: '',
    image: null,
  });

  const [imagePreview, setImagePreview] = useState(null);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      image: file,
    }));
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); // Vous pouvez traiter les données du formulaire ici
    navigate('/');
  };

  return (
    
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField
        label="Ville"
        name="city"
        value={formData.city}
        onChange={handleChange}
        required
      />
      Type de logement:<TextField
        label="Type de logement"
        name="type"
        value={formData.type}
        onChange={handleChange}
        select
        required
      >
        <MenuItem value="chambre">Chambre</MenuItem>
        <MenuItem value="appartement">Appartement</MenuItem>
        <MenuItem value="studio">Studio</MenuItem>
      </TextField>
      <TextField
        label="Description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        multiline
        rows={4}
        required
      />
      <TextField
        label="Prix"
        name="price"
        type="number"
        value={formData.price}
        onChange={handleChange}
        required
      />
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          variant="contained"
          component="label"
        >
          Importer Image
          <input
            type="file"
            name="image"
            onChange={handleFileChange}
            hidden
            required
          />
        </Button>
        {imagePreview && (
          <Box>
            <Typography>Aperçu :</Typography>
            <img src={imagePreview} alt="Aperçu" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
          </Box>
        )}
      </Box>
      <Button type="submit" variant="contained" color="success">
        Publier
      </Button>
    </Box>
    
  );
};

export default PublishForm;
