package com.example.Banckend.SRP.historiaclinica.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import com.example.Banckend.SRP.historiaclinica.model.HistoriaClinica;
import com.example.Banckend.SRP.historiaclinica.service.HistoriaClinicaService;

import java.util.List;


@CrossOrigin(origins = "http://localhost:5173")



@RestController
@RequestMapping("/api/historias-clinicas")
public class HistoriaClinicaController {
    @Autowired
    private HistoriaClinicaService historiaClinicaService;

    @GetMapping
    public List<HistoriaClinica> getAllHistoriasClinicas() {
        return historiaClinicaService.getAllHistoriasClinicas();
    }

    @GetMapping("/{id}")
    public HistoriaClinica getHistoriaClinicaById(@PathVariable int id) {
        return historiaClinicaService.getHistoriaClinicaById(id).orElse(null);
    }

    @PostMapping
    public HistoriaClinica createHistoriaClinica(@RequestBody HistoriaClinica historiaClinica) {
        return historiaClinicaService.createHistoriaClinica(historiaClinica);
    }

    @PutMapping("/{id}")
    public HistoriaClinica updateHistoriaClinica(@PathVariable int id, @RequestBody HistoriaClinica historiaClinica) {
        historiaClinica.setIdHistoriaClinica(id);
        return historiaClinicaService.updateHistoriaClinica(historiaClinica);
    }

    @DeleteMapping("/{id}")
    public void deleteHistoriaClinica(@PathVariable int id) {
        historiaClinicaService.deleteHistoriaClinica(id);
    }
}