import actorService from '../services/actor.service.js'

async function getAllActors(req, res) {
    try {
        const result = await actorService.getAllActors(req.query);
        res.status(200).json(result);
    } catch (error) {
        res.status(error.status || 500).json({ error: error.message });
    }
}

async function getActorById(req, res) {
    try {
        const result = await actorService.getActorById(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        res.status(error.status || 500).json({ error: error.message });
    }
}

async function getActorMovies(req, res) {
    try {
        const result = await actorService.getActorMovies(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        res.status(error.status || 500).json({ error: error.message });
    }
}

async function addActor(req, res) {
    try {
        const result = await actorService.addActor(req.body);
        res.status(201).json({
            message: "Actor agregado!",
            actor: result
        });
    } catch (error) {
        res.status(error.status || 500).json({ error: error.message });
    }
}

async function addMovieToActor(req, res) {
    try {
        const result = await actorService.addMovieToActor(req.params.id, req.params.movieId);
        res.status(201).json({
            message: "Pelicula agregada al actor!",
            actorMovies: result
        });
    } catch (error) {
        res.status(error.status || 500).json({ error: error.message });
    }
}

async function updateActor(req, res) {
    try {
        const result = await actorService.updateActor(req.params.id, req.body);
        res.status(200).json({
            message: "Actor modificado exitosamente!",
            actor: result
        });
    } catch (error) {
        res.status(error.status || 500).json({ error: error.message });
    }
}

export default {
    getAllActors,
    getActorById,
    getActorMovies,
    addActor,
    addMovieToActor,
    updateActor
}