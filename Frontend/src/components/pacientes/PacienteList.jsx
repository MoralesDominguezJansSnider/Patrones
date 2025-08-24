import React, { useEffect, useState } from 'react';
import { getPacientes, deletePaciente } from '../../services/api';

const PacienteList = ({ onEdit, refresh }) => {
    const [pacientes, setPacientes] = useState([]);

    useEffect(() => {
        fetchPacientes();
    }, [refresh]);

    const fetchPacientes = async () => {
        try {
            const response = await getPacientes();
            setPacientes(response.data);
        } catch (error) {
            console.error("Error al cargar pacientes:", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await deletePaciente(id);
            fetchPacientes(); // Recargar lista
        } catch (error) {
            console.error("Error al eliminar paciente:", error);
        }
    };

    return (
        <div>
            <h2>Lista de Pacientes</h2>
            <table border="1" cellPadding="5">
                <thead>
                    <tr>
                        <th>DNI</th>
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>Fecha Nacimiento</th>
                        <th>Dirección</th>
                        <th>Teléfono</th>
                        <th>Email</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {pacientes.map(p => (
                        <tr key={p.idPaciente}>
                            <td>{p.dni}</td> {/* Cambiado de p.DNI a p.dni */}
                            <td>{p.nombres}</td>
                            <td>{p.apellidos}</td>
                            <td>{p.fechaNacimiento ? p.fechaNacimiento.split('T')[0] : ''}</td>
                            <td>{p.direccion}</td>
                            <td>{p.telefono}</td>
                            <td>{p.email}</td>
                            <td>
                                <button onClick={() => onEdit(p)}>Editar</button>
                                <button onClick={() => handleDelete(p.idPaciente)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PacienteList;
