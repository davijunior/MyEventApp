import React from 'react';
import { Link } from 'react-router-dom';
import { mockEvents } from '../mocks/data';
import Header from '../components/Header/Header';
import '../styles/layout.css';

export default function CompanyHome() {
  return (
    <>
      <Header />
      <div className="container company-home">
        <h2 className="text-center mb-md">Meus Eventos</h2>
        <div className="flex-between mb-md">
          <Link to="/company/agenda" className="button">
            Agenda
          </Link>
        </div>

        <div className="flex-between mb-md">
          <Link to="/company/create" className="button">
            + Criar Evento
          </Link>
          <Link to="/company/search" className="button button--secondary">
            Buscar Freelancers
          </Link>
        </div>

        <ul className="list">
          {mockEvents.map(e => (
            <li key={e.id} className="card mb-sm">
              <h3>{e.name}</h3>
              <p>
                <strong>Data:</strong> {e.date}
              </p>
              <p>
                <strong>Local:</strong> {e.location}
              </p>
              <Link to={`/company/event/${e.id}`} className="button mt-sm">
                Ver Detalhes
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}