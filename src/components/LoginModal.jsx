import { Link } from 'react-router-dom';
import './LoginModal.css';

function LoginModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <h2>Connexion</h2>
        <form className="login-form" onSubmit={e => { e.preventDefault(); /* gérer la connexion */ }}>
          <input type="email" placeholder="Email" autoFocus required />
          <input type="password" placeholder="Mot de passe" required />
          <button type="submit" className="login-btn">Se connecter</button>
        </form>
        <div className="modal-links">
          <Link to="/register" className="modal-link">S’inscrire</Link>
          <Link to="/forgot-password" className="modal-link">Mot de passe oublié ?</Link>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
