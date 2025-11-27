// app.js
// const express = require('express');
import express from 'express';
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express();
const PORT = 3000;

// Middleware
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(cookieParser());
app.use(express.json());

import authRoutes from './auth/auth.routes.js'
app.use('/api/auth', authRoutes);

import authMiddleware from './auth/auth.middleware.js';
if (process.env.NODE_ENV === 'production') {
  app.use(authMiddleware.verificarAutenticacion);
} else {
  console.log('Autenticación deshabilitada');
}

// Importar rutas
import directorRoutes from './routes/director.routes.js';
import movieRoutes from './routes/movie.routes.js'
import actorRoutes from './routes/actor.routes.js'

// Rutas base
app.use('/api/directors', directorRoutes);
app.use('/api/movies', movieRoutes);
app.use('/api/actors', actorRoutes)

// Ruta raíz
app.get('/', (req, res) => {
  res.json({ message: '🎬 Bienvenido a CineBase API - Tu base de datos cinematográfica!' });
});

// Arrancar servidor
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});

export default app;