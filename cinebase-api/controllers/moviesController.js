import movies from '../my-models/moviesModel.js';
import directors from '../my-models/directorsModel.js';

const getAllMovies = (req, res) => {
  const { genre, minRating, minYear, maxYear } = req.query;

  let filteredMovies = [...movies];

  if (genre) filteredMovies = filteredMovies.filter(m => m.genre.includes(genre));
  if (minRating) filteredMovies = filteredMovies.filter(m => m.rating >= parseFloat(minRating));
  if (minYear) filteredMovies = filteredMovies.filter(m => m.releaseYear >= parseInt(minYear));
  if (maxYear) filteredMovies = filteredMovies.filter(m => m.releaseYear <= parseInt(maxYear));

  res.json(filteredMovies);
};

const getMovieById = (req, res) => {
  const movie = movies.find(m => m.id === req.params.id);
  //   console.log(req.params);
  if (!movie) return res.status(404).json({ error: 'Película no encontrada' });
  res.json(movie);
};

const createMovie = (req, res) => {
  const { id, title, releaseYear, genre, duration, directorId, rating, language, country } = req.body;

  if (!id || !title || !directorId) {
    return res.status(400).json({ error: 'Campos obligatorios faltantes' });
  }

  const directorExists = directors.find(d => d.id === directorId);
  if (!directorExists) return res.status(422).json({ error: 'El directorId no existe' });

  const exists = movies.find(m => m.id === id);
  if (exists) return res.status(409).json({ error: 'Ya existe una película con ese ID' });

  const newMovie = { id, title, releaseYear, genre, duration, directorId, rating, language, country };
  movies.push(newMovie);
  res.status(201).json(newMovie);
};

const patchMovie = (req, res) => {
  const { title, releaseYear, genre, duration, directorId, rating, language, country } = req.body;

  const movie = movies.find(m => m.id === req.params.id);
  if (!movie) return res.status(404).json({ error: 'Película no encontrada' });

  if (directorId) {
    const directorExists = directors.find(d => d.id === directorId);
    if (!directorExists) return res.status(422).json({ error: 'El directorId no existe' });
    movie.directorId = directorId;
  }

  // Actualizamos solo los campos que se pasen en el body
  if (title !== undefined) movie.title = title;
  if (releaseYear !== undefined) movie.releaseYear = releaseYear;
  if (genre !== undefined) movie.genre = genre;
  if (duration !== undefined) movie.duration = duration;
  if (rating !== undefined) movie.rating = rating;
  if (language !== undefined) movie.language = language;
  if (country !== undefined) movie.country = country;

  res.json(movie);
};

const deleteMovie = (req, res) => {
  const movieIndex = movies.findIndex(m => m.id === req.params.id);

  if (movieIndex === -1) {
    return res.status(404).json({ error: 'Película no encontrada' });
  }

  const deletedMovie = movies.splice(movieIndex, 1)[0];

  res.json({ message: 'Película eliminada', movie: deletedMovie });
};

export { getAllMovies, getMovieById, createMovie, patchMovie, deleteMovie };