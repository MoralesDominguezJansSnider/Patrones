import React, { useState, useEffect } from 'react';
import { createPaciente, updatePaciente } from '../../services/api';

const PacienteForm = ({ paciente, onSubmit }) => {
    const [DNI, setDNI] = useState('');
    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [direccion, setDireccion] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (paciente) {
            setDNI(paciente.DNI || '');
            setNombres(paciente.nombres || '');
            setApellidos(paciente.apellidos || '');
            setFechaNacimiento(
                paciente.fechaNacimiento
                    ? paciente.fechaNacimiento.split('T')[0]
                    : ''
            );
            setDireccion(paciente.direccion || '');
            setTelefono(paciente.telefono || '');
            setEmail(paciente.email || '');
        }
    }, [paciente]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Enviar el campo 'DNI' como 'dni' para que Spring Boot lo reconozca
        const data = {
            dni: DNI,
            nombres,
            apellidos,
            fechaNacimiento,
            direccion,
            telefono,
            email
        };

        try {
            if (paciente) {
                await updatePaciente({ ...data, idPaciente: paciente.idPaciente });
            } else {
                await createPaciente(data);
            }

            // Limpiar campos
            setDNI('');
            setNombres('');
            setApellidos('');
            setFechaNacimiento('');
            setDireccion('');
            setTelefono('');
            setEmail('');

            if (onSubmit) onSubmit(); // Avisar a la lista que hubo cambios
        } catch (error) {
            console.error("Error al guardar paciente:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="DNI" value={DNI} onChange={e => setDNI(e.target.value)} required />
            <input type="text" placeholder="Nombres" value={nombres} onChange={e => setNombres(e.target.value)} required />
            <input type="text" placeholder="Apellidos" value={apellidos} onChange={e => setApellidos(e.target.value)} required />
            <input type="date" placeholder="Fecha Nacimiento" value={fechaNacimiento} onChange={e => setFechaNacimiento(e.target.value)} required />
            <input type="text" placeholder="Dirección" value={direccion} onChange={e => setDireccion(e.target.value)} />
            <input type="text" placeholder="Teléfono" value={telefono} onChange={e => setTelefono(e.target.value)} />
            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            <button type="submit">{paciente ? 'Actualizar' : 'Guardar'}</button>
        </form>
    );
};

export default PacienteForm;
