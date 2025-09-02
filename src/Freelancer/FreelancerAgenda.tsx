import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import '../styles/layout.css';

// Mock de eventos aceitos
const acceptedEvents = [
  {
    id: 1,
    name: 'Festival de Música Independente',
    date: '10/09/2025',
    location: 'São Paulo, SP',
    status: 'Confirmado',
  },
  {
    id: 2,
    name: 'Feira de Gastronomia',
    date: '18/10/2025',
    location: 'Campinas, SP',
    status: 'Confirmado',
  },
  {
    id: 3,
    name: 'Evento Corporativo Tech',
    date: '19/10/2025',
    location: 'Taubaté, SP',
    status: 'Confirmado',
  },
];

export default function FreelancerAgenda() {
  return (
    <>
      <Header />
      <div className="container freelancer-agenda">
        <h2 className="text-center mb-md">Minha Agenda</h2>

        <ul className="list">
          {acceptedEvents.map(event => (
            <li key={event.id} className="card mb-sm">
              <Link to={`/freelancer/`}>
                <h3>{event.name}</h3>
                <p><strong>Data:</strong> {event.date}</p>
                <p><strong>Local:</strong> {event.location}</p>
                <p><strong>Status:</strong> {event.status}</p>
              </Link>
            </li>
          ))}
          {acceptedEvents.length === 0 && (
            <li className="card text-center">Nenhum evento aceito ainda.</li>
          )}
        </ul>
      </div>
    </>
  );
}