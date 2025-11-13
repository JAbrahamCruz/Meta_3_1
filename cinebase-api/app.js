// app.js
// const express = require('express');
import express from 'express';
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Importar rutas
// const movieRoutes = require('./routes/moviesRoutes');
// const directorRoutes = require('./routes/directorsRoutes');
// const actorRoutes = require('./routes/actorsRoutes');
// const relationRoutes = require('./routes/relationsRoutes');

import movieRoutes from './routes/moviesRoutes.js';
import directorRoutes from './routes/directorsRoutes.js';
import actorRoutes from './routes/actorsRoutes.js';
// import relationsRoutes from './routes/relationsRoutes.js';

// Rutas base
app.use('/api/movies', movieRoutes);
app.use('/api/directors', directorRoutes);
app.use('/api/actors', actorRoutes);
// app.use('/api/relations', relationRoutes);

// Ruta raíz
app.get('/', (req, res) => {
  res.json({ message: '🎬 Bienvenido a CineBase API - Tu base de datos cinematográfica!' });
});

// Arrancar servidor
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});

export default app;