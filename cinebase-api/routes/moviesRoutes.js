const express = require('express');
const router = express.Router();
const { getAllMovies, getMovieById, createMovie } = require('../controllers/moviesController');

// Rutas RESTful
router.get('/', getAllMovies);
router.get('/:id', getMovieById);
router.post('/', createMovie);

module.exports = router;