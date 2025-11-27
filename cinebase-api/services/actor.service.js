import db from '../models/index.js'
import { Op } from 'sequelize'

async function getAllActors(filters = {}) {
    try {
        const { nationality, minBirthYear } = filters;
        const where = {};

        if (nationality) where.nationality = { [Op.like]: `%${nationality}%` }
        if (minBirthYear) where.birthYear = { [Op.gte]: minBirthYear }

        const actors = await db.Actor.findAll({
            where
        });
        return actors
    } catch (error) {
        throw new Error(error.message || "Error al obtener los actores de la BD");
    }
}

async function getActorById(id) {
    try {
        const actor = await db.Actor.findByPk(id);
        if (!actor) throw new Error("El actor no existe");
        return actor;
    } catch (error) {
        throw new Error(error.message || "Error al obtener el actor: " + id + " de la BD");
    }
}

async function getActorMovies(id) {
    try {
        const actor = await db.Actor.findByPk(id);
        if (!actor) throw new Error("El actor no existe");

        const movies = await actor.getMovies();
        if (movies.length == 0) throw new Error("Actor sin peliculas");
        return movies;
    } catch (error) {
        throw new Error(error.message || "Error al obtener las peliculas del actor: " + id + " de la BD");
    }
}

async function addActor(actorData) {
    try {
        const newActor = await db.Actor.create(actorData);
        return newActor;
    } catch (error) {
        throw new Error(error.message || "Error al agregar el actor: " + actorData);
    }
}

async function addMovieToActor(id, movieId) {
    try {
        const actor = await db.Actor.findByPk(id);
        if (!actor) throw new Error("El actor no existe");

        const movie = await db.Movie.findByPk(movieId);
        if (!movie) throw new Error("La pelicula no existe");
        
        await actor.addMovie(movie);
        const actorMovies = await actor.getMovies();

        return actorMovies;
    } catch (error) {
        throw new Error(error.message || "Error al agregar la pelicula: " + movieId + " al actor: " + id);
    }
}

async function updateActor(id, actorData) {
    try {
        const actor = await db.Actor.findByPk(id);
        if (!actor) throw new Error("El actor no existe");

        await actor.update(actorData);
        return actor;
    } catch (error) {
        throw new Error(error.message || "Error al modificar el actor: " + id);
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