import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Router from './router';
import LoginModal from './components/LoginModal';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <BrowserRouter>
      <Header onLoginClick={() => setModalOpen(true)} />
      <Router />
      <Footer />
      <LoginModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </BrowserRouter>
  );
}

export default App;
