// Importar Express
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para entender JSON en las solicitudes
app.use(express.json());

// Ruta POST para login
app.post('/login', (req, res) => {
  const { usuario, password } = req.body;

  // Validación simple
  if(usuario === 'admin' && password === '1234'){
    res.json({ mensaje: 'Autenticación satisfactoria' });
  } else {
    res.status(401).json({ error: 'Error de autenticación' });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});