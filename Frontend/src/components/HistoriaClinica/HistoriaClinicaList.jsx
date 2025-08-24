import React, { useEffect, useState } from 'react';
import { getHistoriasClinicas, deleteHistoriaClinica } from '../../services/api';

const HistoriaClinicaList = ({ refresh }) => {
    const [historiasClinicas, setHistoriasClinicas] = useState([]);

    useEffect(() => {
        fetchHistoriasClinicas();
    }, [refresh]);

    const fetchHistoriasClinicas = async () => {
        const response = await getHistoriasClinicas();
        setHistoriasClinicas(response.data);
    };

    const handleDelete = async (id) => {
        await deleteHistoriaClinica(id);
        fetchHistoriasClinicas();
    };

    return (
        <div>
            <h2>Lista de Historias Clínicas</h2>
            <ul>
                {historiasClinicas.map(historia => (
                    <li key={historia.idHistoriaClinica}>
                        {historia.fechaCreacion} - {historia.antecedentes} 
                        {historia.alergias && ` - Alergias: ${historia.alergias}`}
                        {historia.enfermedadesCronicas && ` - Enfermedades Crónicas: ${historia.enfermedadesCronicas}`}
                        <button onClick={() => handleDelete(historia.idHistoriaClinica)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HistoriaClinicaList;


