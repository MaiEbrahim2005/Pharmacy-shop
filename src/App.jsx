// src/App.jsx
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ShopPage from './pages/ShopPage';
import Login from './pages/Login';
import Register from './pages/Register'; // أضيفي استيراد الريجستر
import './App.css';

// كومبوننت مساعد علشان نشوف location
function AppContent() {
  const location = useLocation();
  // اخفي النافبار في اللوجين والريجستر
  const hideNavbar = location.pathname === '/login' || location.pathname === '/register';

  return (
    <div className="App">
      {!hideNavbar && <Navbar cartCount={3} />}
      
      <Routes>
        <Route path="/" element={<ShopPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> {/* أضيفي هذا الـ route */}
      </Routes>
      
      {!hideNavbar && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;