import db from '../models/index.js';
import { Op } from 'sequelize';

// Funcion para obtener todos los directores con y sin filtros
async function getAllDirectors(filters = {}) {
    try {
        const { nationality, minBirthYear } = filters;
        const where = {};

        if (nationality)
            where.nationality = {
                [Op.like]: `%${nationality}%`
            }

        if (minBirthYear)
            where.birthYear = {
                [Op.gte]: minBirthYear
            }

        where.active = true;
        const res = await db.Director.findAll({
            where,
            attributes: ['id', 'name', 'nationality', 'birthYear', 'notableAwards'],
            order: [
                ['name', 'ASC']
            ],
        });

        return res;
    } catch (error) {
        throw new Error(error.message || "Error al obtener los directores");
    }
}

async function getDirectorById(id) {
    try {
        const director = await db.Director.findByPk(id);
        if (!director || !director.active) throw new Error("Director no encontrado");
        return director;
    } catch (error) {
        throw new Error(error.message || "Error al obtener el director: " + id)
    }
}

async function getDirectorMovies(id) {
    try {
        const director = await db.Director.findByPk(id);
        if (!director || !director.active) throw new Error("Director no encontrado");

        const movies = await director.getMovies({
            attributes: ["title", "duration", "rating"],
            order: [
                ['rating', 'DESC']
            ]
        });

        return movies;
    } catch (error) {
        throw new Error(error.message || "Error al obtener las peliculas del director");
    }
}

async function addDirector(director) {
    try {
        const newDirector = await db.Director.create(director)
        return newDirector;
    } catch (error) {
        throw new Error(error.message || "Error al crear el director");
    }
}

async function addMovieToDirector(id, movieId) {
    try {
        const director = await db.Director.findByPk(id);
        if (!director) throw new Error("El director no existe");

        const movie = await db.Movie.findByPk(movieId);
        if (!movie) throw new Error("La pelicula no existe");

        await director.addMovie(movie);

        const directorMovies = director.getMovies();
        return directorMovies;
    } catch (error) {
        throw new Error(error.message || "Error al agregar la pelicula al director");
    }
}

async function deleteDirector(id) {
    try {
        const director = await db.Director.findByPk(id);
        if (!director || !director.active) throw new Error("El director no existe");

        await director.update({
            active: false
        })
        return director;
    } catch (error) {
        throw new Error(error.message || "Error al eliminar el director");
    }
}

async function restoreDirector(id) {
    try {
        const director = await db.Director.findByPk(id);
        if (!director) throw new Error("El director no existe");
        if (director.active) throw new Error("El director ya esta activo")

        await director.update({
            active: true
        })
        return director;
    } catch (error) {
        throw new Error(error.message || "Error al restaurar el director");
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