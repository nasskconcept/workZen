import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Search from './pages/search';
import Favorites from './pages/favorites';
import Profile from './pages/profile';

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    );
}