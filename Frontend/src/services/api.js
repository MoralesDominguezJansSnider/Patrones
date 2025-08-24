import axios from 'axios';

const API_URL = 'http://localhost:8080/api'; // Ajusta el puerto si tu Spring Boot usa otro

// Pacientes
export const getPacientes = () => axios.get(`${API_URL}/pacientes`);
export const createPaciente = (data) => axios.post(`${API_URL}/pacientes`, data);
export const updatePaciente = (data) => axios.put(`${API_URL}/pacientes/${data.idPaciente}`, data);
export const deletePaciente = (id) => axios.delete(`${API_URL}/pacientes/${id}`);

// Historias Clínicas
export const getHistoriasClinicas = () => axios.get(`${API_URL}/historias-clinicas`);
export const createHistoriaClinica = (data) => axios.post(`${API_URL}/historias-clinicas`, data);
export const updateHistoriaClinica = (data) => axios.put(`${API_URL}/historias-clinicas/${data.idHistoriaClinica}`, data);
export const deleteHistoriaClinica = (id) => axios.delete(`${API_URL}/historias-clinicas/${id}`);
