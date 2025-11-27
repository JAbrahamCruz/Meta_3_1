import express from "express";
import controller from '../controllers/movie.controller.js'

const router = express.Router();

router.get("/", controller.getAllMovies);
router.get("/:id", controller.getMovieById);
router.get("/:id/genres", controller.getMovieGenres);
router.get("/:id/actors", controller.getMovieActors);

router.post("/", controller.addMovie);
router.post("/:id/add-genre/:genreId", controller.addGenreToMovie);
router.post("/id/add-actor", controller.addActorToMovie);

router.patch("/:id", controller.updateMovie);
router.patch("/:id/restore", controller.restoreMovie);

router.delete("/:id", controller.deleteMovie);

export default router;