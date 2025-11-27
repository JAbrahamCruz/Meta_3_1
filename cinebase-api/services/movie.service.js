import db from '../models/index.js'
import { Op } from 'sequelize';

async function getAllMovies(filters = {}) {
    try {
        const { genre, minRating, minYear, maxYear } = filters;
        const where = {};

        // filtros sobre MOVIES
        if (minRating) where.rating = { [Op.gte]: minRating }
        if (minYear) where.releaseYear = { [Op.gte]: minYear }
        if (maxYear) where.releaseYear = { [Op.lte]: maxYear }

        const include = [];

        // Filtro por género (tabla relacionada)
        if (genre) {
            include.push({
                model: db.Genre,
                attributes: { exclude: ['active', 'createdAt', 'updatedAt'] },
                where: {
                    genre: { [Op.like]: `%${genre}%` }
                },
                through: { attributes: [] } // opcional, oculta pivot
            });
        }

        where.active = true;

        const movies = await db.Movie.findAll({
            attributes: { exclude: ['active', 'createdAt', 'updatedAt'] },
            order: [
                ['title', 'ASC']
            ],
            where,
            include
        });

        return movies;
    } catch (error) {
        throw new Error(error.message || "Error al consultar las peliculas de la BD");
    }
}

async function getMovieById(id) {
    try {
        const movie = await db.Movie.findByPk(id);
        if (!movie) throw new Error("La pelicula no existe");
        return movie;
    } catch (error) {
        throw new Error(error.message || "Error al consultar la pelicula en la BD");
    }
}

async function getMovieGenres(id) {
    try {
        const movie = await db.Movie.findByPk(id);
        if (!movie) {
            throw new Error("La pelicula no existe");
        }

        const genres = await movie.getGenres();
        return genres;
    } catch (error) {
        throw new Error(error.message || "Error al obtener los generos de la pelicula");
    }
}

async function getMovieActors(id) {
    try {
        const movie = await db.Movie.findByPk(id);
        if (!movie) throw new Error("La pelicula no existe");

        const actors = await movie.getActors({
            attributes: { exclude: ['active', 'createdAt', 'updatedAt'] },
            joinTableAttributes: ['movieId', 'actorId', 'characterName']
        });
        return actors;
    } catch (error) {
        throw new Error(error.message || "Error al obtener los actores de la pelicula");
    }
}

async function addMovie(movie) {
    try {
        const directorId = movie.directorId;

        // Validar que el director exista
        const director = await db.Director.findByPk(directorId);
        if (!director) {
            throw new Error("El director no existe");
        }

        // Crear película
        const newMovie = await db.Movie.create(movie);
        return newMovie;
    } catch (error) {
        // Si ya traía un mensaje específico, lo relanzamos
        throw new Error(error.message || "Error al agregar la pelicula a la BD");
    }
}

async function addGenreToMovie(id, genreId) {
    try {
        const movie = await db.Movie.findByPk(id);
        if (!movie) throw new Error("La pelicula no existe");

        const genre = await db.Genre.findByPk(genreId);
        if (!genre) throw new Error("El genero no existe");

        await movie.addGenre(genre);

        const movieGenres = await movie.getGenres();
        return movieGenres
    } catch (error) {
        throw new Error(error.message || "Error al agregar el genero a la pelicula");
    }
}

async function addActorToMovie(id, actorId) {
    try {
        const movie = await db.Movie.findByPk(id);
        if (!movie) throw new Error("La pelicula no existe");

        const actor = await db.Actor.findByPk(actorId);
        if (!actor) throw new Error("El actor no existe");

        await movie.addActor(actor);

        const movieActors = await movie.getActors();
        return movieActors
    } catch (error) {
        throw new Error(error.message || "Error al agregar el actor a la pelicula");
    }
}

async function updateMovie(id, newData) {
    console.log(newData.title);
    try {
        const movie = await db.Movie.findByPk(id);
        if (!movie) throw new Error("La pelicula no existe")

        if (newData.directorId) {
            const director = await db.Director.findByPk(newData.directorId);
            if (!director) throw new Error("El director ID: " + newData.directorId + " no existe")
        }
        await movie.update(newData);
        return movie
    } catch (error) {
        throw new Error(error.message || "Error al actualizar la pelicula en la BD")
    }
}

async function deleteMovie(id) {
    try {
        const movie = await db.Movie.findByPk(id);
        if (!movie || !movie.active) throw new Error("La pelicula no existe");

        await movie.update({
            active: false
        })
        return movie;
    } catch (error) {
        throw new Error(error.message || "Error al eliminar la pelicula");
    }
}

async function restoreMovie(id) {
    try {
        const movie = await db.Movie.findByPk(id);
        if (!movie) throw new Error("La pelicula no existe");
        if (movie.active) throw new Error("La pelicula ya esta activa")

        await movie.update({
            active: true
        })
        return movie;
    } catch (error) {
        throw new Error(error.message || "Error al restaurar la pelicula")
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