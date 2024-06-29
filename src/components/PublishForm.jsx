import React, { useState } from 'react';
import './PublishForm.css';

const PublishForm = () => {
  const [formData, setFormData] = useState({
    ville: '',
    typeLogement: '',
    description: '',
    prix: '',
    image: null,
  });
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, image: e.target.files[0] });
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Gérer la soumission du formulaire
  };

  return (
    <div className="publish-form-container">
      <h2 className="publish-form-title">Publier une Offre</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="ville">Ville</label>
          <input
            className="publish-form-input"
            type="text"
            id="ville"
            name="ville"
            placeholder="Ville"
            value={formData.ville}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="typeLogement">Type de logement</label>
          <select
            className="publish-form-input"
            id="typeLogement"
            name="typeLogement"
            value={formData.typeLogement}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Choisir un type</option>
            <option value="Chambre">Chambre</option>
            <option value="Appartement">Appartement</option>
            <option value="Studio">Studio</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="publish-form-input publish-form-textarea"
            id="description"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="prix">Prix</label>
          <input
            className="publish-form-input"
            type="number"
            id="prix"
            name="prix"
            placeholder="Prix"
            value={formData.prix}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group image-preview">
          <label htmlFor="image-upload">Image</label>
          {imagePreview && <img src={imagePreview} alt="Aperçu de l'image" />}
          <input
            accept="image/*"
            style={{ display: 'none' }}
            id="image-upload"
            type="file"
            onChange={handleImageChange}
          />
          <label htmlFor="image-upload" className="image-upload-label">
            Importer une image
          </label>
        </div>
        <button className="publish-form-button" type="submit">Publier</button>
      </form>
    </div>
  );
};

export default PublishForm;
