import directorService from "../services/director.service.js";

async function getAllDirectors(req, res) {
    try {
        const result = await directorService.getAllDirectors(req.query);
        res.status(200).json(result);
    } catch (err) {
        res.status(err.status || 500).json({ error: err.message });
    }
}

async function getDirectorById(req, res) {
    try {
        const result = await directorService.getDirectorById(req.params.id);
        res.status(200).json(result);
    } catch (err) {
        res.status(err.status || 500).json({ error: err.message });
    }
}

async function getDirectorMovies(req, res) {
    try {
        const result = await directorService.getDirectorMovies(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        res.status(error.status || 500).json({ error: error.message });
    }
}

async function addDirector(req, res) {
    try {
        const result = await directorService.addDirector(req.body)
        res.status(201).json({
            message: "Director creado",
            director: result
        });
    } catch (error) {
        res.status(error.status || 500).json({ error: error.message });
    }
}

async function addMovieToDirector(req, res) {
    try {
        const result = await directorService.addMovieToDirector(req.params.id, req.params.movieId)
        res.status(201).json({
            message: "Pelicula agregada!:",
            movies: result
        });
    } catch (err) {
        res.status(err.status || 500).json({ error: err.message });
    }
}

async function deleteDirector(req, res) {
    try {
        const result = await directorService.deleteDirector(req.params.id)
        res.status(200).json({
            message: "Director eliminado con exito",
            director: result
        })
    } catch (err) {
        res.status(err.status || 500).json({ error: err.message });
    }
}

async function restoreDirector(req, res) {
    try {
        const result = await directorService.restoreDirector(req.params.id)
        res.status(200).json({
            message: "Director restaurado con exito",
            director: result
        })
    } catch (err) {
        res.status(err.status || 500).json({ error: err.message });
    }
}

export default {
    getAllDirectors,
    getDirectorById,
    getDirectorMovies,
    addDirector,
    addMovieToDirector,
    deleteDirector,
    restoreDirector
}