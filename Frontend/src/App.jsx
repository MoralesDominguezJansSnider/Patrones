// App.jsx
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState, useEffect } from "react";
import api from "./api"; // importamos la conexión general
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [nombre, setNombre] = useState("");

  // Cargar items al inicio
  useEffect(() => {
    api.get("/api/items")  // usamos la baseURL de api.js
      .then(res => setItems(res.data))
      .catch(err => console.error(err));
  }, []);

  // Crear item
  const addItem = async () => {
    if (!nombre.trim()) return;
    const res = await api.post("/api/items", { nombre }); // también usamos api.js
    setItems([...items, res.data]);
    setNombre("");
  };

  // Eliminar item
  const deleteItem = async (id) => {
    await api.delete(`/api/items/${id}`);
    setItems(items.filter(i => i.id !== id));
  };

  return (
    <div className="app">
      <h1>Gestión de Items</h1>

      <div className="form">
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Nombre del item"
        />
        <button onClick={addItem}>Agregar</button>
      </div>

      <ul>
        {items.map(i => (
          <li key={i.id}>
            {i.nombre}
            <button onClick={() => deleteItem(i.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
