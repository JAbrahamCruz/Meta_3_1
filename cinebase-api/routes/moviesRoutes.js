const express = require('express');
const router = express.Router();
const { getAllMovies, getMovieById, createMovie, patchMovie, deleteMovie } = require('../controllers/moviesController');

// Rutas RESTful
router.get('/', getAllMovies);
router.get('/:id', getMovieById);
router.post('/', createMovie);
router.patch('/:id', patchMovie);
router.delete('/:id', deleteMovie);

module.exports = router;