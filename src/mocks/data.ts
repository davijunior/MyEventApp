export type Role = 'company' | 'freelancer';

export interface Vacancy {
  id: string;
  type: string;
  quantity: number;
}

export interface Event {
  id: string;
  name: string;
  date: string;
  location: string;
  vacancies: Vacancy[];
}

export interface User {
  id: string;
  name: string;
  role: Role;
  services?: string[];  // para freelancers
}

export const mockUsers: User[] = [
  { id: 'u1', name: 'Empresa A', role: 'company' },
  { id: 'u2', name: 'Freela João', role: 'freelancer', services: ['garçom', 'segurança'] },
];

export const mockEvents: Event[] = [
  {
    id: 'e1',
    name: 'Festa de Aniversário',
    date: '2025-12-01',
    location: 'Salão X',
    vacancies: [
      { id: 'v1', type: 'garçom', quantity: 2 },
      { id: 'v2', type: 'auxiliar de cozinha', quantity: 3 },
    ],
  },
];