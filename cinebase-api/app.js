// app.js
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Importar rutas
const movieRoutes = require('./routes/moviesRoutes');
const directorRoutes = require('./routes/directorsRoutes');
const actorRoutes = require('./routes/actorsRoutes');
const relationRoutes = require('./routes/relationsRoutes');

// Rutas base
app.use('/api/movies', movieRoutes);
// app.use('/api/directors', directorRoutes);
// app.use('/api/actors', actorRoutes);
// app.use('/api/relations', relationRoutes);

// Ruta raíz
app.get('/', (req, res) => {
  res.json({ message: '🎬 Bienvenido a CineBase API - Tu base de datos cinematográfica!' });
});

// Arrancar servidor
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});