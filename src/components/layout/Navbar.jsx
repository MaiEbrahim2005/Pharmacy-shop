// src/components/layout/Navbar.jsx
import React, { useState } from 'react';
import { FiSearch, FiShoppingCart, FiUser, FiX } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';  // أضيفي هذا السطر
import './Navbar.css';

const Navbar = ({ cartCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('shop');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();  // أضيفي هذا السطر

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* اللوجو */}
        <div className="logo">
          <img src="src/assets/images/logo.png" alt="Pharmez Logo" />
        </div>
        
        {/* القائمة */}
        <ul className="nav-menu">
          {['home', 'about', 'services', 'shop', 'faq', 'contact'].map((item) => (
            <li key={item}>
              <a 
                href={`#${item}`}
                className={activeLink === item ? 'active' : ''}
                onClick={() => setActiveLink(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
        
        {/* الأيقونات */}
        <div className="nav-icons">
          {/* أيقونة البحث */}
          <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
            {isSearchOpen ? <FiX /> : <FiSearch />}
          </button>
          
          {/* أيقونة العربة مع العداد */}
          <button className="cart-icon">
            <FiShoppingCart />
            {cartCount > 0 && (
              <span className="cart-count">{cartCount}</span>
            )}
          </button>
          
          {/* أيقونة المستخدم - معدلة */}
          <button onClick={() => navigate('/login')}>
            <FiUser />
          </button>
        </div>
        
        {/* زر الموبايل */}
        <div className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </div>
      </div>
      
      {/* شريط البحث اللي هيظهر */}
      {isSearchOpen && (
        <div className="search-bar">
          <input 
            type="text"
            placeholder="Search for medicines..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
          />
          <button onClick={() => {
            console.log('Searching for:', searchQuery);
            setIsSearchOpen(false);
          }}>
            Search
          </button>
        </div>
      )}
      
      {/* القائمة للـ mobile */}
      {isMenuOpen && (
        <div className="mobile-menu">
          {['home', 'about', 'services', 'faq', 'shop', 'contact'].map((item) => (
            <a 
              key={item}
              href={`#${item}`}
              className={activeLink === item ? 'active' : ''}
              onClick={() => {
                setActiveLink(item);
                setIsMenuOpen(false);
              }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
          {/* إضافة اللوجين في الموبايل مينيو */}
          <a 
            href="#login"
            onClick={(e) => {
              e.preventDefault();
              navigate('/login');
              setIsMenuOpen(false);
            }}
          >
            Login
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;