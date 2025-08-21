// src/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080", // solo la base URL
});

export default api;
