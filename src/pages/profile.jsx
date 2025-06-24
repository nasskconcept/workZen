import { useState } from 'react';
import './profile.css';

function Profile() {
  const [name, setName] = useState('Margaux Delange');
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  return (
    <main className="profile">
      <h1 className="profile-title">Mon Profil</h1>
      <div className="profile-container">
        <form className="profile-form" onSubmit={(e) => e.preventDefault()}>
          <fieldset className="profile-fieldset">
            <legend>Informations personnelles</legend>
            <label>
              Nom complet
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </label>
            <label>
              Email
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </label>
          </fieldset>

          <fieldset className="profile-fieldset">
            <legend>Changer le mot de passe</legend>
            <label>
              Mot de passe actuel
              <input
                type="password"
                value={currentPassword}
                onChange={e => setCurrentPassword(e.target.value)}
              />
            </label>
            <label>
              Nouveau mot de passe
              <input
                type="password"
                value={newPassword}
                onChange={e => setNewPassword(e.target.value)}
              />
            </label>
          </fieldset>

          <div className="profile-btns">
            <button type="submit" className="profile-save">
              Sauvegarder
            </button>
            <button type="button" className="profile-delete">
              Supprimer le compte
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Profile;
