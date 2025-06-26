// src/pages/favorites.jsx
import React from 'react';
import { useFavorites } from '../contexts/FavoritesContext';
import './favorites.css';

export default function Favoris() {
  const { favorites, removeFavorite } = useFavorites();

  return (
    <main className="favorites">
      <h1 className="favorites-title">Favoris</h1>
      <div className="favorites-list">
        {favorites.map(item => (
          <div className="favorites-card" key={item.id}>
            <div className="favorites-info">
              <span className="favorites-card-title">{item.name}</span>
              <div className="favorites-infos">
                <span>Type : {item.type}</span>
                <span>Ville : {item.city}</span>
                <span>Distance : {item.distance} km</span>
                <span>Prix : {item.price === 0 ? 'Gratuit' : `${item.price} €/h`}</span>
                <div className="favorites-equipements">
                  {item.equipements.map((eq, i) => (
                    <span key={i} className="eq-badge" data-eq={eq}>
                      {eq}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <img src={item.img} alt={item.name} className="favorites-img" />

            {/* Petite croix de suppression */}
            <button
              className="fav-remove-btn"
              onClick={() => removeFavorite(item.id)}
              aria-label="Retirer des favoris"
            >
              ×
            </button>
          </div>
        ))}

        {favorites.length === 0 && (
          <p className="favorites-empty">Vous n'avez aucun favori.</p>
        )}
      </div>
    </main>
  );
}
