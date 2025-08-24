package com.example.Banckend.SRP.paciente.model;

import java.time.LocalDate;
import com.example.Banckend.SRP.historiaclinica.model.HistoriaClinica;
import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.*;

@Entity
@Table(name = "Paciente")
public class Paciente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idPaciente", nullable = false)
    private int idPaciente;

@Column(name = "DNI", nullable = false)
@JsonProperty("dni")
    private String DNI;

   @Column(nullable = false)
    private String nombres;

    @Column(nullable = false)
    private String apellidos;

    @Column(name = "fechaNacimiento", nullable = false)
    private LocalDate fechaNacimiento;

    private String direccion;
    private String telefono;
    private String email;

    @ManyToOne
    @JoinColumn(name = "idHistoriaClinica", referencedColumnName = "idHistoriaClinica")
    private HistoriaClinica historiaClinica;

    // Constructor vacío
    public Paciente() {}

    // Constructor con parámetros
    public Paciente(String DNI, String nombres, String apellidos, LocalDate fechaNacimiento,
                    String direccion, String telefono, String email,
                    HistoriaClinica historiaClinica) {
        this.DNI = DNI;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.fechaNacimiento = fechaNacimiento;
        this.direccion = direccion;
        this.telefono = telefono;
        this.email = email;
        this.historiaClinica = historiaClinica;
    }

    // Getters y Setters
    public int getIdPaciente() {
        return idPaciente;
    }

    public void setIdPaciente(int idPaciente) {
        this.idPaciente = idPaciente;
    }

    public String getDNI() {
        return DNI;
    }

    public void setDNI(String DNI) {
        this.DNI = DNI;
    }

    public String getNombres() {
        return nombres;
    }

    public void setNombres(String nombres) {
        this.nombres = nombres;
    }

    public String getApellidos() {
        return apellidos;
    }

    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }

    public LocalDate getFechaNacimiento() {
        return fechaNacimiento;
    }

    public void setFechaNacimiento(LocalDate fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public HistoriaClinica getHistoriaClinica() {
        return historiaClinica;
    }

    public void setHistoriaClinica(HistoriaClinica historiaClinica) {
        this.historiaClinica = historiaClinica;
    }
}
