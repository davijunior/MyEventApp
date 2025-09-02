import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { mockUsers } from '../../mocks/data';
import '../../styles/layout.css';

export default function Login() {
  const { login } = useContext(AuthContext);
  const nav = useNavigate();

  const handleLogin = (id: string) => {
    login(id);
    const user = mockUsers.find(u => u.id === id)!;
    nav(user.role === 'company' ? '/company' : '/freelancer');
  };

  return (
    <div className="container login-page">
      <h2 className="text-center mb-md">Escolha um usuário para entrar</h2>
      <div className="list">
        {mockUsers.map(u => (
          <button
            key={u.id}
            className="button mb-sm"
            onClick={() => handleLogin(u.id)}
          >
            {u.name} ({u.role})
          </button>
        ))}
      </div>
    </div>
  );
}