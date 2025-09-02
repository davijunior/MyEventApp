import React from 'react';
import Header from '../components/Header/Header';
import '../styles/layout.css';

// Mock de propostas recebidas (você pode substituir por dados reais futuramente)
const mockProposals = [
  {
    id: 'p1',
    eventName: 'Festa Corporativa',
    date: '2025-09-10',
    location: 'São Paulo',
    company: 'Eventos SP',
    message: 'Gostaríamos de contar com você como garçom.',
  },
  {
    id: 'p2',
    eventName: 'Casamento no Campo',
    date: '2025-09-22',
    location: 'Taubaté',
    company: 'Casamentos Premium',
    message: 'Precisamos de 2 auxiliares de cozinha. Você está disponível?',
  },
];

export default function FreelancerProposals() {
  return (
    <>
      <Header />
      <div className="container proposals-page">
        <h2 className="text-center mb-md">Propostas Recebidas</h2>

        {mockProposals.length === 0 ? (
          <p className="text-center">Nenhuma proposta recebida até o momento.</p>
        ) : (
          <ul className="list">
            {mockProposals.map(p => (
              <li key={p.id} className="card mb-sm">
                <h3>{p.eventName}</h3>
                <p><strong>Data:</strong> {p.date}</p>
                <p><strong>Local:</strong> {p.location}</p>
                <p><strong>Empresa:</strong> {p.company}</p>
                <p><strong>Mensagem:</strong> {p.message}</p>
                <div className="flex-end">
                  <button className="button">Aceitar</button>
                  <button className="button button--secondary ml-sm">Recusar</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}