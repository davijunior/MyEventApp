import { useState } from 'react';
import { User } from '../../mocks/data';
import "../../styles/layout.css"

export type Event = {
  id: string;
  name: string;
  date: string;
};

export type ProposalModalProps = {
  freelancer: User;
  events: Event[];
  onClose: () => void;
  onSubmit: (proposal: {
    freelancerId: string;
    eventId: number;
    payment: number;
    message: string;
  }) => void;
};


export default function ProposalModal({ freelancer, events, onClose, onSubmit }: ProposalModalProps) {
  const [selectedEventId, setSelectedEventId] = useState<number | null>(null);
  const [payment, setPayment] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (!selectedEventId || !payment) return;

    onSubmit({
      freelancerId: freelancer.id,
      eventId: selectedEventId,
      payment: parseFloat(payment),
      message,
    });

    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2 className=''>Enviar proposta para {freelancer.name}</h2>
        <p><strong>Skills:</strong> {freelancer.skills ? freelancer.skills.join(', ') : 'N/A'}</p>
        <p><strong>Email:</strong> {freelancer.email}</p>

        <label>
          Evento:
          <select value={selectedEventId ?? ''} onChange={(e) => setSelectedEventId(Number(e.target.value))}>
            <option value="" disabled>Selecione um evento</option>
            {events.map(event => (
              <option key={event.id} value={event.id}>
                {event.name} – {event.date}
              </option>
            ))}
          </select>
        </label>

        <label>
          Valor do pagamento:
          <input
            type="number"
            value={payment}
            onChange={(e) => setPayment(e.target.value)}
            placeholder="R$"
          />
        </label>

        <label>
          Mensagem:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Escreva uma mensagem para o freelancer..."
          />
        </label>

        <button onClick={handleSubmit}>Enviar proposta</button>
        <button onClick={onClose}>Cancelar</button>
      </div>
    </div>
  );
}