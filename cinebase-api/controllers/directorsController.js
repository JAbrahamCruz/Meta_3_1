const directors = require('../models/directorsModel')
const movies = require('../models/moviesModel')

const getAllDirectors = (req, res) => {
    const { nationality, minBirthYear } = req.query;

    let filteredDirectors = [...directors];

    if (nationality) filteredDirectors = filteredDirectors.filter(d => d.nationality.includes(nationality))
    if (minBirthYear) filteredDirectors = filteredDirectors.filter(d => d.birthYear >= parseInt(minBirthYear))

    res.json(filteredDirectors);
}

const getDirectorMovies = (req, res) => {
    const director = directors.find(d => d.id === req.params.id)
    if (!director) return res.status(404).json({ error: 'El director no existe' });

    const directorMovies = movies.filter(m => m.directorId === director.id);
    res.json(directorMovies);
}

const postDirector = (req, res) => {
    const { id, name, nationality, birthYear, birthPlace, notableAwards } = req.body;
    if (!id || !name) return res.status(400).json({ error: 'Campos faltantes' })

    // Validacion de existencia del director a crear
    const exists = directors.find(d => d.id === id)
    if (exists) return res.status(409).json({ error: 'El director ya existe' })

    const newDirector = { id, name, nationality, birthYear, birthPlace, notableAwards };
    directors.push(newDirector);
    res.status(201).json({ message: 'Director creado', director: newDirector })
}

module.exports = { getAllDirectors, getDirectorMovies, postDirector }