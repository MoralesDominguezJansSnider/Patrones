package com.example.Banckend.SRP.historiaclinica.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.Banckend.SRP.historiaclinica.model.HistoriaClinica;
import com.example.Banckend.SRP.historiaclinica.repository.HistoriaClinicaRepository;

import java.util.Optional;

@Service
public class HistoriaClinicaService {
    @Autowired
    private HistoriaClinicaRepository historiaClinicaRepository;

    public List<HistoriaClinica> getAllHistoriasClinicas() {
        return historiaClinicaRepository.findAll();
    }

    public HistoriaClinica createHistoriaClinica(HistoriaClinica historiaClinica) {
        return historiaClinicaRepository.save(historiaClinica);
    }

    public Optional<HistoriaClinica> getHistoriaClinicaById(int id) {
        return historiaClinicaRepository.findById(id);
    }

    public HistoriaClinica updateHistoriaClinica(HistoriaClinica historiaClinica) {
        return historiaClinicaRepository.save(historiaClinica);
    }

    public void deleteHistoriaClinica(int id) {
        historiaClinicaRepository.deleteById(id);
    }
}