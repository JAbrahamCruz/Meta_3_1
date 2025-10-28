const express = require('express');
const router = express.Router();
const { getAllDirectors, getDirectorMovies, postDirector } = require('../controllers/directorsController')

// Rutas RESTful
router.get('/', getAllDirectors);
router.get('/:id/movies', getDirectorMovies);
router.post('/', postDirector);

module.exports = router;