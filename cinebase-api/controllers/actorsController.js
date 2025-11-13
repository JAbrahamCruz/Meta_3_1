import actors from '../my-models/actorsModel.js';
import movieActors from '../my-models/movieActors.js';
import movies from '../my-models/moviesModel.js';

const getAllActors = (req, res) => {
    const { nationality, minBirthYear } = req.query;
    let filteredActors = [...actors];

    if (nationality) filteredActors = filteredActors.filter(a => a.nationality.includes(nationality));
    if (minBirthYear) filteredActors = filteredActors.filter(a => a.birthYear >= parseInt(minBirthYear));

    res.json(filteredActors);
}

const getActorMovies = (req, res) => {
    const actor = actors.find(a => a.id === req.params.id);
    if (!actor) return res.status(404).json({ error: 'El actor no existe' });

    const relations = movieActors.filter(ma => ma.actorId === actor.id);
    const actorMovies = relations.map(rel => {
        const movie = movies.find(m => m.id === rel.movieId);
        if (movie) {
            return {
                ...movie,
                characterName: rel.characterName
            };
        }
    });
    res.json({ actor, movies: actorMovies });
}

const postActor = (req, res) => {
    const { id, name, nationality, birthYear, birthPlace, notableAwards } = req.body;

    const exist = actors.find(a => a.id === id);
    if (exist) return res.status(409).json({ message: 'El actor ya existe' });

    if (!id || !name) return res.status(400).json({ message: 'Campos faltantes' });

    const newActor = { id, name, nationality, birthYear, birthPlace, notableAwards };
    actors.push(newActor);
    res.status(201).json({ message: 'Nuevo actor creado', actor: newActor });
}

export { getAllActors, getActorMovies, postActor };