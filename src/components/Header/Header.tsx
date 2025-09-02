import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import '../../styles/layout.css';

export default function Header() {
  const { user, logout } = useContext(AuthContext);
  const nav = useNavigate();

  const handleProfile = () => {
    if (user?.role === 'company') nav('/company');
    else nav('/freelancer');
  };

  return (
    <header className="header">
      <h1 className="logo">MyEventApp</h1>
      {user && (
        <div className="header-actions">
          <button className="button" onClick={handleProfile}>
            Perfil
          </button>
          <button className="button button--secondary" onClick={logout}>
            Logout
          </button>
        </div>
      )}
    </header>
  );
}