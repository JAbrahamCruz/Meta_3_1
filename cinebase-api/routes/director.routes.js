import express from "express";
import controller from '../controllers/director.controller.js'

const router = express.Router();

router.get("/", controller.getAllDirectors);
router.get("/:id", controller.getDirectorById);
router.get("/:id/movies", controller.getDirectorMovies);
router.post("/", controller.addDirector);
router.post("/:id/add-movie/:movieId", controller.addMovieToDirector)
router.delete("/:id", controller.deleteDirector)
router.patch("/:id/restore", controller.restoreDirector)

export default router;