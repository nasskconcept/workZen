import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <main className="home">
      <div className="overlay">
        <h1 className="home_title">Bienvenue sur WorkZen</h1>
        <p className="home_subtitle">Trouvez l’espace de travail idéal près de chez vous.</p>
        {/* ◀️ ici on wrap le bouton dans un Link */}
        <Link to="/search">
          <button className="home_cta">Découvrir les espaces</button>
        </Link>
      </div>
    </main>
  );
}

export default Home;
