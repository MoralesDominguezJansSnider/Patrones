import React, { useState, useEffect } from 'react';
import { createHistoriaClinica, updateHistoriaClinica } from '../../services/api';

const HistoriaClinicaForm = ({ historiaClinica, onSubmit }) => {
    const [fechaCreacion, setFechaCreacion] = useState(historiaClinica?.fechaCreacion || '');
    const [antecedentes, setAntecedentes] = useState(historiaClinica?.antecedentes || '');
    const [alergias, setAlergias] = useState(historiaClinica?.alergias || '');
    const [enfermedadesCronicas, setEnfermedadesCronicas] = useState(historiaClinica?.enfermedadesCronicas || '');

    useEffect(() => {
        if (historiaClinica) {
            setFechaCreacion(historiaClinica.fechaCreacion || '');
            setAntecedentes(historiaClinica.antecedentes || '');
            setAlergias(historiaClinica.alergias || '');
            setEnfermedadesCronicas(historiaClinica.enfermedadesCronicas || '');
        }
    }, [historiaClinica]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { fechaCreacion, antecedentes, alergias, enfermedadesCronicas };
        if (historiaClinica) {
            await updateHistoriaClinica({ ...data, idHistoriaClinica: historiaClinica.idHistoriaClinica });
        } else {
            await createHistoriaClinica(data);
        }

        // Limpiar campos
        setFechaCreacion('');
        setAntecedentes('');
        setAlergias('');
        setEnfermedadesCronicas('');

        if (onSubmit) onSubmit();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="date" 
                value={fechaCreacion} 
                onChange={(e) => setFechaCreacion(e.target.value)}
                required 
            />
            <input 
                type="text" 
                value={antecedentes} 
                onChange={(e) => setAntecedentes(e.target.value)} 
                placeholder="Antecedentes" 
                required 
            />
            <input
                type="text"
                value={alergias}
                onChange={(e) => setAlergias(e.target.value)}
                placeholder="Alergias"
            />
            <input
                type="text"
                value={enfermedadesCronicas}
                onChange={(e) => setEnfermedadesCronicas(e.target.value)}
                placeholder="Enfermedades Crónicas"
            />
            <button type="submit">Guardar</button>
        </form>
    );
};

export default HistoriaClinicaForm;
