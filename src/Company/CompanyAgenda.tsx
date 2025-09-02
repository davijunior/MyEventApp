import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Modal from '../components/Modal/Modal';
import '../styles/layout.css';

// Mock de eventos da empresa
const companyEvents = [
  {
    id: 1,
    name: 'Festival de Música Independente',
    date: '2025-09-10',
    location: 'São Paulo, SP',
    description: 'Evento voltado para bandas emergentes e artistas independentes.',
    confirmedFreelancers: ['Ana Souza', 'Carlos Lima', 'Fernanda Rocha'],
  },
  {
    id: 2,
    name: 'Feira de Gastronomia',
    date: '2025-09-18',
    location: 'Campinas, SP',
    description: 'Feira com foco em culinária regional e food trucks.',
    confirmedFreelancers: ['João Mendes', 'Luciana Alves'],
  },
  {
    id: 3,
    name: 'Evento Corporativo Tech',
    date: '2025-10-02',
    location: 'Taubaté, SP',
    description: 'Encontro de empresas de tecnologia com palestras e networking.',
    confirmedFreelancers: ['Rafael Costa'],
  },
];

export default function CompanyAgenda() {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  const openModal = (event: any) => setSelectedEvent(event);
  const closeModal = () => setSelectedEvent(null);

  return (
    <>
      <Header />
      <div className="container company-agenda">
        <h2 className="text-center mb-md">Agenda de Eventos</h2>

        <ul className="list">
          {companyEvents.map(event => (
            <li key={event.id} className="card mb-sm" onClick={() => openModal(event)} style={{ cursor: 'pointer' }}>
              <h3>{event.name}</h3>
              <p><strong>Data:</strong> {event.date}</p>
              <p><strong>Local:</strong> {event.location}</p>
            </li>
          ))}
        </ul>

        {selectedEvent && (
          <Modal onClose={closeModal}>
            <h2>{selectedEvent.name}</h2>
            <p><strong>Data:</strong> {selectedEvent.date}</p>
            <p><strong>Local:</strong> {selectedEvent.location}</p>
            <p><strong>Descrição:</strong> {selectedEvent.description}</p>
            <p><strong>Freelancers Confirmados:</strong></p>
            <ul>
              {selectedEvent.confirmedFreelancers.map((name: String, index: any) => (
                <li key={index}>{name}</li>
              ))}
            </ul>
          </Modal>
        )}
      </div>
    </>
  );
}