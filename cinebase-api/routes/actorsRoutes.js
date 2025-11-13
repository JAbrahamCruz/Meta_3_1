import express from 'express';
const router = express.Router();
import { getAllActors, getActorMovies, postActor } from '../controllers/actorsController.js';

router.get('/', getAllActors);
router.get('/:id/movies', getActorMovies);
router.post('/', postActor);

export default router;