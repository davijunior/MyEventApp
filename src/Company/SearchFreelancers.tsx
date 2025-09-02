import React, { useState } from 'react';
import { mockUsers } from '../mocks/data';
import Header from '../components/Header/Header';
import '../styles/layout.css';

export default function SearchFreelancers() {
  const [query, setQuery] = useState('');
  const freelancers = mockUsers.filter(u => u.role === 'freelancer');

  const filtered = freelancers.filter(f =>
    f.name.toLowerCase().includes(query.toLowerCase()) ||
    f.services?.some(s => s.toLowerCase().includes(query.toLowerCase()))
  );

  const sendProposal = (id: string) => {
    console.log('Proposta enviada para', id);
  };

  return (
    <>
      <Header />
      <div className="container search-page">
        <h2 className="text-center mb-md">Buscar Freelancers</h2>

        <div className="form-group mb-md">
          <input
            type="text"
            className="input"
            placeholder="Buscar por nome ou serviço..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>

        <ul className="list">
          {filtered.map(f => (
            <li className="card mb-sm" key={f.id}>
              <h3>{f.name}</h3>
              <p><strong>Serviços:</strong> {f.services?.join(', ')}</p>
              <div className="flex-end">
                <button className="button" onClick={() => sendProposal(f.id)}>
                  Enviar Proposta
                </button>
              </div>
            </li>
          ))}
          {filtered.length === 0 && (
            <li className="card text-center">Nenhum freelancer encontrado.</li>
          )}
        </ul>
      </div>
    </>
  );
}