import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';
import "./Header.css";
function Header({ onLoginClick }) {
    return (
        <header className="header">
        <div className="header_container">
            <div className="header_logo">
                <img src={logo} alt="logo WorZen"/>
            </div>
        <nav className="header_nav">
        <NavLink to="/" className={({ isActive}) => "header_link" + (isActive ? " active" : "")}>Accueil</NavLink>
        <NavLink to="/search" className={({ isActive}) =>"header_link" + (isActive ? " active" : "")}>Recherche</NavLink>
        <NavLink to="/favorites" className={({ isActive}) =>"header_link" + (isActive ? " active" : "")}>Favoris</NavLink>
        <NavLink to="/profile" className={({ isActive}) =>"header_link" + (isActive ? " active" : "")}>Profil</NavLink>
        <button className="header_login" onClick={onLoginClick}>Connexion</button>
        </nav>
        </div>
        </header>
    );
}

export default Header;