package com.example.Banckend.SRP.paciente.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.Banckend.SRP.paciente.model.Paciente;
import com.example.Banckend.SRP.paciente.service.PacienteService;

import java.util.List;
@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/pacientes")
public class PacienteController {
    @Autowired
    private PacienteService pacienteService;

    @GetMapping
    public List<Paciente> getAllPacientes() {
        return pacienteService.getAllPacientes();
    }

    @GetMapping("/{id}")
    public Paciente getPacienteById(@PathVariable int id) {
        return pacienteService.getPacienteById(id).orElse(null);
    }

    @PostMapping
    public Paciente createPaciente(@RequestBody Paciente paciente) {
        return pacienteService.createPaciente(paciente);
    }

    @PutMapping("/{id}")
    public Paciente updatePaciente(@PathVariable int id, @RequestBody Paciente paciente) {
        paciente.setIdPaciente(id);
        return pacienteService.updatePaciente(paciente);
    }

    @DeleteMapping("/{id}")
    public void deletePaciente(@PathVariable int id) {
        pacienteService.deletePaciente(id);
    }
}