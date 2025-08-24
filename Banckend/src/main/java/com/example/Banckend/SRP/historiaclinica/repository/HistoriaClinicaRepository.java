package com.example.Banckend.SRP.historiaclinica.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Banckend.SRP.historiaclinica.model.HistoriaClinica;


public interface HistoriaClinicaRepository extends JpaRepository<HistoriaClinica, Integer> {
    // Puedes agregar métodos personalizados aquí si es necesario
}