import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { mockEvents } from '../mocks/data';
import Header from '../components/Header/Header';
import '../styles/layout.css';

export default function FreelancerHome() {
  const [query, setQuery] = useState('');

  const filteredEvents = mockEvents.filter(e =>
    e.name.toLowerCase().includes(query.toLowerCase()) ||
    e.location.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <Header />
      <div className="container freelancer-home">
        <h2 className="text-center mb-md">Eventos Disponíveis</h2>

        <div className="form-group mb-md">
          <input
            type="text"
            className="input"
            placeholder="Buscar por nome ou local..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>
        <div className="flex-end mb-md">
          <Link to="/freelancer/agenda" className="button button--primary">
            Ver Minha Agenda
          </Link>
        </div>
        

        <div className="flex-end mb-md">
          <Link to="/freelancer/proposals" className="button button--secondary">
            Ver Propostas Recebidas
          </Link>
        </div>

        <ul className="list">
          {filteredEvents.map(e => (
            <li key={e.id} className="card mb-sm">
              <Link to={`/freelancer/event/${e.id}`}>
                <h3>{e.name}</h3>
                <p><strong>Data:</strong> {e.date}</p>
                <p><strong>Local:</strong> {e.location}</p>
              </Link>
            </li>
          ))}
          {filteredEvents.length === 0 && (
            <li className="card text-center">Nenhum evento encontrado.</li>
          )}
        </ul>
      </div>
    </>
  );
}