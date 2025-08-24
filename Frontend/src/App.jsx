import React, { useState } from 'react';
import PacienteForm from './components/pacientes/PacienteForm';
import PacienteList from './components/pacientes/PacienteList';
import HistoriaClinicaForm from './components/HistoriaClinica/HistoriaClinicaForm';
import HistoriaClinicaList from './components/HistoriaClinica/HistoriaClinicaList';

const App = () => {
    // Para refrescar las listas
    const [refreshPacientes, setRefreshPacientes] = useState(false);
    const [editingPaciente, setEditingPaciente] = useState(null);

    const [refreshHistorias, setRefreshHistorias] = useState(false);
    const [editingHistoria, setEditingHistoria] = useState(null);

    // Pacientes
    const handleEditPaciente = (paciente) => setEditingPaciente(paciente);
    const handleSubmitPaciente = () => {
        setEditingPaciente(null);
        setRefreshPacientes(!refreshPacientes);
    };

    // Historias Clínicas
    const handleEditHistoria = (historia) => setEditingHistoria(historia);
    const handleSubmitHistoria = () => {
        setEditingHistoria(null);
        setRefreshHistorias(!refreshHistorias);
    };

    return (
        <div>
            <h1>Gestión de Pacientes</h1>
            <PacienteForm paciente={editingPaciente} onSubmit={handleSubmitPaciente} />
            <PacienteList onEdit={handleEditPaciente} refresh={refreshPacientes} />

            <h1>Gestión de Historias Clínicas</h1>
            <HistoriaClinicaForm historiaClinica={editingHistoria} onSubmit={handleSubmitHistoria} />
            <HistoriaClinicaList onEdit={handleEditHistoria} refresh={refreshHistorias} />
        </div>
    );
};

export default App;
