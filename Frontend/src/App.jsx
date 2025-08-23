// App.jsx
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState, useEffect } from "react";
import api from "./api"; // importamos la conexión general
import ItemManager from "./itemFUNCION/ItemManager";

function App() {
  return (
    <div>
      <ItemManager />
    </div>
  );
}

export default App;
