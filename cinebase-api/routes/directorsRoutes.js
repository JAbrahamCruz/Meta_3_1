import express from 'express';
const router = express.Router();
import { getAllDirectors, getDirectorMovies, postDirector } from '../controllers/directorsController.js';

// Rutas RESTful
router.get('/', getAllDirectors);
router.get('/:id/movies', getDirectorMovies);
router.post('/', postDirector);

export default router;