// controllers/moviesController.js
const movies = require('../models/moviesModel');
const directors = require('../models/directorsModel');

const getAllMovies = (req, res) => {
  const { genre, minRating, minYear, maxYear } = req.query;

  let filtered = [...movies];

  if (genre) filtered = filtered.filter(m => m.genre.includes(genre));
  if (minRating) filtered = filtered.filter(m => m.rating >= parseFloat(minRating));
  if (minYear) filtered = filtered.filter(m => m.releaseYear >= parseInt(minYear));
  if (maxYear) filtered = filtered.filter(m => m.releaseYear <= parseInt(maxYear));

  res.json(filtered);
};

const getMovieById = (req, res) => {
  const movie = movies.find(m => m.id === req.params.id);
  if (!movie) return res.status(404).json({ error: 'Película no encontrada' });
  res.json(movie);
};

const createMovie = (req, res) => {
  const { id, title, releaseYear, genre, duration, directorId, rating } = req.body;

  if (!id || !title || !directorId) {
    return res.status(400).json({ error: 'Campos obligatorios faltantes' });
  }

  const directorExists = directors.find(d => d.id === directorId);
  if (!directorExists) return res.status(422).json({ error: 'El directorId no existe' });

  const exists = movies.find(m => m.id === id);
  if (exists) return res.status(409).json({ error: 'Ya existe una película con ese ID' });

  const newMovie = { id, title, releaseYear, genre, duration, directorId, rating };
  movies.push(newMovie);
  res.status(201).json(newMovie);
};

module.exports = { getAllMovies, getMovieById, createMovie };