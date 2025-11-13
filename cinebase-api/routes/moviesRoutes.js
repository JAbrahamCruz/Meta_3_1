import express from 'express';
const router = express.Router();
import { getAllMovies, getMovieById, createMovie, patchMovie, deleteMovie } from '../controllers/moviesController.js';

// Rutas RESTful
router.get('/', getAllMovies);
router.get('/:id', getMovieById);
router.post('/', createMovie);
router.patch('/:id', patchMovie);
router.delete('/:id', deleteMovie);

export default router;