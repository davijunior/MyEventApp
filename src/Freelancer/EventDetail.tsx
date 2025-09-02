import React from 'react';
import { useParams } from 'react-router-dom';
import { mockEvents } from '../mocks/data';
import Header from '../components/Header/Header';
import '../styles/layout.css';

export default function EventDetail() {
  const { id } = useParams<{ id: string }>();
  const event = mockEvents.find(e => e.id === id)!;

  const apply = () => {
    console.log('Aplicação para evento', id);
  };

  return (
    <>
      <Header />
      <div className="container event-detail-page">
        <div className="card">
          <h2 className="text-center mb-md">{event.name}</h2>
          <p><strong>Data:</strong> {event.date}</p>
          <p><strong>Local:</strong> {event.location}</p>

          <h3 className="mt-md mb-sm">Vagas</h3>
          <ul className="list mb-md">
            {event.vacancies.map(v => (
              <li key={v.id}>
                {v.quantity}x {v.type}
              </li>
            ))}
          </ul>

          <div className="flex-end">
            <button className="button" onClick={apply}>
              Aplicar para Vaga
            </button>
          </div>
        </div>
      </div>
    </>
  );
}