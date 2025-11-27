import express from "express";
import controller from '../controllers/actor.controller.js'

const router = express.Router();

router.get("/", controller.getAllActors)
router.get("/:id", controller.getActorById)
router.get("/:id/movies", controller.getActorMovies)
router.post("/", controller.addActor)
router.post("/:id/add-movie/:movieId", controller.addMovieToActor)
router.patch("/:id", controller.updateActor)

export default router