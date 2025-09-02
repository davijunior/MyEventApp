import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Login from '../pages/Auth/Login';
import CompanyHome from '../Company/CompanyHome';
import CreateEvent from '../Company/CreateEvent';
import SearchFreelancers from '../Company/SearchFreelancers';
import FreelancerHome from '../Freelancer/FreelancerHome';
import EventDetail from '../Freelancer/EventDetail';
import FreelancerProposals from '../Freelancer/FreelancerProposals';
import FreelancerAgenda from '../Freelancer/FreelancerAgenda';
import CompanyAgenda from '../Company/CompanyAgenda';



const PrivateRoute = ({ element: Element }: any) => {
  const { user } = useContext(AuthContext);
  return user ? <Element /> : <Navigate to="/login" />;
};

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/company" element={<PrivateRoute element={CompanyHome} />} />
        <Route path="/company/create" element={<PrivateRoute element={CreateEvent} />} />
        <Route path="/company/search" element={<PrivateRoute element={SearchFreelancers} />} />
        <Route path="/company/agenda" element={<PrivateRoute element={CompanyAgenda} />} />
        

        <Route path="/freelancer" element={<PrivateRoute element={FreelancerHome} />} />
        <Route path="/freelancer/event/:id" element={<PrivateRoute element={EventDetail} />} />
        <Route path="/freelancer/proposals" element={<PrivateRoute element={FreelancerProposals} />} />
        <Route path="/freelancer/agenda" element={<PrivateRoute element={FreelancerAgenda} />} />


        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}