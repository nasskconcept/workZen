// App.jsx
import { useState } from 'react';
import { HashRouter } from 'react-router-dom';
import { FavoritesProvider } from './contexts/FavoritesContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Router from './router';
import LoginModal from './components/LoginModal';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <FavoritesProvider>
      <HashRouter>
        <Header onLoginClick={() => setModalOpen(true)} />
        <Router />
        <Footer />
        <LoginModal open={modalOpen} onClose={() => setModalOpen(false)} />
      </HashRouter>
    </FavoritesProvider>
  );
}

export default App;
