const express = require('express');
const router = express.Router();
const { getAllActors, getActorMovies, postActor } = require('../controllers/actorsController');

router.get('/', getAllActors);
router.get('/:id/movies', getActorMovies);
router.post('/', postActor);

module.exports = router;