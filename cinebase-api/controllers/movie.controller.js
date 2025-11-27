import movieService from '../services/movie.service.js'

async function getAllMovies(req, res) {
    try {
        const result = await movieService.getAllMovies(req.query);
        res.status(200).json(result)
    } catch (error) {
        res.status(error.status || 500).json({ error: error.message });
    }
}

async function getMovieById(req, res) {
    try {
        const result = await movieService.getMovieById(req.params.id);
        res.status(200).json(result)
    } catch (error) {
        res.status(error.status || 500).json({ error: error.message });
    }
}

async function getMovieGenres(req, res) {
    try {
        const result = await movieService.getMovieGenres(req.params.id);
        res.status(200).json(result)
    } catch (error) {
        res.status(error.status || 500).json({ error: error.message });
    }
}

async function getMovieActors(req, res) {
    try {
        const result = await movieService.getMovieActors(req.params.id);
        res.status(200).json(result)
    } catch (error) {
        res.status(error.status || 500).json({ error: error.message });
    }
}

async function addMovie(req, res) {
    try {
        const result = await movieService.addMovie(req.body)
        res.status(201).json({
            message: "Nueva pelicula agregada",
            nuevaPelicula: result
        })
    } catch (error) {
        res.status(error.status || 500).json({ error: error.message });
    }
}

async function addGenreToMovie(req, res) {
    try {
        const result = await movieService.addGenreToMovie(req.params.id, req.params.genreId)
        res.status(201).json({
            message: "Genero agregado",
            genres: result
        })
    } catch (error) {
        res.status(error.status || 500).json({ error: error.message });
    }
}

async function addActorToMovie(req, res) {
    try {
        const result = await movieService.addActorToMovie(req.params.id, req.params.actorId)
        res.status(201).json({
            message: "Actor agregado",
            actors: result
        })
    } catch (error) {
        res.status(error.status || 500).json({ error: error.message });
    }
}

async function updateMovie(req, res) {
    try {
        const result = await movieService.updateMovie(req.params.id, req.body)
        res.status(200).json({
            message: "Pelicula modificada",
            movie: result
        })
    } catch (error) {
        res.status(error.status || 500).json({ error: error.message });
    }
}

async function deleteMovie(req, res) {
    try {
        const result = await movieService.deleteMovie(req.params.id)
        res.status(200).json({
            message: "Pelicula eliminada con exito :(",
            peliculaEliminada: result
        })
    } catch (error) {
        res.status(error.status || 500).json({ error: error.message });
    }
}

async function restoreMovie(req, res) {
    try {
        const result = await movieService.restoreMovie(req.params.id)
        res.status(200).json({
            message: "Pelicula restaurada con exito :)",
            peliculaRecuperada: result
        })
    } catch (error) {
        res.status(error.status || 500).json({ error: error.message });
    }
}

export default {
    getAllMovies,
    getMovieById,
    getMovieGenres,
    getMovieActors,
    addMovie,
    addGenreToMovie,
    addActorToMovie,
    deleteMovie,
    restoreMovie,
    updateMovie
}