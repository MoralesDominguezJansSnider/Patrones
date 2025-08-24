package com.example.Banckend.SRP.historiaclinica.model;

import java.time.LocalDate;
import jakarta.persistence.*;

@Entity
@Table(name = "HistoriaClinica")
public class HistoriaClinica {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idHistoriaClinica", nullable = false)
    private int idHistoriaClinica;

    @Column(name = "fechaCreacion", nullable = false)
    private LocalDate fechaCreacion;

    private String antecedentes;
    private String alergias;
    private String enfermedadesCronicas;

    // Constructor vacío
    public HistoriaClinica() {}

    // Constructor con parámetros
    public HistoriaClinica(LocalDate fechaCreacion, String antecedentes, String alergias, 
                           String enfermedadesCronicas) {
        this.fechaCreacion = fechaCreacion;
        this.antecedentes = antecedentes;
        this.alergias = alergias;
        this.enfermedadesCronicas = enfermedadesCronicas;
    }

    // Getters y Setters
    public int getIdHistoriaClinica() {
        return idHistoriaClinica;
    }

    public void setIdHistoriaClinica(int idHistoriaClinica) {
        this.idHistoriaClinica = idHistoriaClinica;
    }

    public LocalDate getFechaCreacion() {
        return fechaCreacion;
    }

    public void setFechaCreacion(LocalDate fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
    }

    public String getAntecedentes() {
        return antecedentes;
    }

    public void setAntecedentes(String antecedentes) {
        this.antecedentes = antecedentes;
    }

    public String getAlergias() {
        return alergias;
    }

    public void setAlergias(String alergias) {
        this.alergias = alergias;
    }

    public String getEnfermedadesCronicas() {
        return enfermedadesCronicas;
    }

    public void setEnfermedadesCronicas(String enfermedadesCronicas) {
        this.enfermedadesCronicas = enfermedadesCronicas;
    }
}
