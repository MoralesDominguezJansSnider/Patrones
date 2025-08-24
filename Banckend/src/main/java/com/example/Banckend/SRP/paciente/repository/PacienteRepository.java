package com.example.Banckend.SRP.paciente.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.Banckend.SRP.paciente.model.Paciente;

public interface PacienteRepository extends JpaRepository<Paciente, Integer> {
    // Puedes agregar métodos personalizados aquí si es necesario
}