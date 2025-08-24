package com.example.Banckend.SRP.paciente.service;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.Banckend.SRP.paciente.model.Paciente;
import com.example.Banckend.SRP.paciente.repository.PacienteRepository;

import java.util.List;
import java.util.Optional;

@Service
public class PacienteService {
    @Autowired
    private PacienteRepository pacienteRepository;

    public List<Paciente> getAllPacientes() {
        return pacienteRepository.findAll();
    }

    public Paciente createPaciente(Paciente paciente) {
        return pacienteRepository.save(paciente);
    }

    public Optional<Paciente> getPacienteById(int id) {
        return pacienteRepository.findById(id);
    }

    public Paciente updatePaciente(Paciente paciente) {
        return pacienteRepository.save(paciente);
    }

    public void deletePaciente(int id) {
        pacienteRepository.deleteById(id);
    }
}