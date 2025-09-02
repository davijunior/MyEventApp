import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header/Header';
import { Vacancy, Event } from '../mocks/data';
import '../styles/layout.css';

export default function CreateEvent() {
  const nav = useNavigate();
  const [form, setForm] = useState<Omit<Event, 'id'>>({
    name: '',
    date: '',
    location: '',
    vacancies: [],
  });
  const [vacancy, setVacancy] = useState<Omit<Vacancy, 'id'>>({ type: '', quantity: 1 });

  const addVacancy = () => {
    setForm(f => ({
      ...f,
      vacancies: [...f.vacancies, { ...vacancy, id: Date.now().toString() }],
    }));
  };

  const handleSubmit = () => {
    console.log('Novo Evento:', form);
    nav('/company');
  };

  return (
    <>
      <Header />
      <div className="container create-event-page">
        <h2 className="text-center mb-md">Criar Novo Evento</h2>

        <div className="form-group">
          <label>Nome</label>
          <input
            type="text"
            className="input"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label>Data</label>
          <input
            type="date"
            className="input"
            value={form.date}
            onChange={e => setForm({ ...form, date: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label>Local</label>
          <input
            type="text"
            className="input"
            value={form.location}
            onChange={e => setForm({ ...form, location: e.target.value })}
          />
        </div>

        <h3 className="mt-md mb-sm">Vagas</h3>

        <div className="form-group">
          <label>Tipo</label>
          <input
            type="text"
            className="input"
            value={vacancy.type}
            onChange={e => setVacancy(v => ({ ...v, type: e.target.value }))}
          />
        </div>

        <div className="form-group">
          <label>Quantidade</label>
          <input
            type="number"
            className="input"
            value={vacancy.quantity}
            onChange={e => setVacancy(v => ({ ...v, quantity: Number(e.target.value) }))}
          />
        </div>

        <button className="button button--secondary mb-md" onClick={addVacancy}>
          Adicionar Vaga
        </button>

        <ul className="list mb-md">
          {form.vacancies.map(v => (
            <li key={v.id} className="card">
              {v.quantity}x {v.type}
            </li>
          ))}
        </ul>

        <button className="button" onClick={handleSubmit}>
          Salvar Evento
        </button>
      </div>
    </>
  );
}