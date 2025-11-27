'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Movies', [
      {
        imdbID: 'tt0816692',
        title: 'Interstellar',
        releaseYear: 2014,
        directorId: 2, // Christopher Nolan
        duration: 169,
        rating: 8.6,
        language: 'Inglés',
        country: 'Estados Unidos',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imdbID: 'tt0133093',
        title: 'The Matrix',
        releaseYear: 1999,
        directorId: 2,
        duration: 136,
        rating: 8.7,
        language: 'Inglés',
        country: 'Estados Unidos',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imdbID: 'tt7286456',
        title: 'Joker',
        releaseYear: 2019,
        directorId: 5, // James Cameron (solo como ejemplo)
        duration: 122,
        rating: 8.4,
        language: 'Inglés',
        country: 'Estados Unidos',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imdbID: 'tt6751668',
        title: 'Parasite',
        releaseYear: 2019,
        directorId: 6, // Bong Joon-ho
        duration: 132,
        rating: 8.5,
        language: 'Coreano',
        country: 'Corea del Sur',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imdbID: 'tt0108052',
        title: 'Schindler\'s List',
        releaseYear: 1993,
        directorId: 5,
        duration: 195,
        rating: 9.0,
        language: 'Inglés',
        country: 'Estados Unidos',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imdbID: 'tt0993846',
        title: 'The Wolf of Wall Street',
        releaseYear: 2013,
        directorId: 1, // Alfonso Cuarón (solo ejemplo)
        duration: 180,
        rating: 8.2,
        language: 'Inglés',
        country: 'Estados Unidos',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imdbID: 'tt4154796',
        title: 'Avengers: Endgame',
        releaseYear: 2019,
        directorId: 3, // Tarantino (solo ejemplo)
        duration: 181,
        rating: 8.4,
        language: 'Inglés',
        country: 'Estados Unidos',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imdbID: 'tt0110912',
        title: 'Pulp Fiction',
        releaseYear: 1994,
        directorId: 3, // Quentin Tarantino
        duration: 154,
        rating: 8.9,
        language: 'Inglés',
        country: 'Estados Unidos',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imdbID: 'tt9376612',
        title: 'Shang-Chi and the Legend of the Ten Rings',
        releaseYear: 2021,
        directorId: 4, // Greta Gerwig (solo ejemplo)
        duration: 132,
        rating: 7.4,
        language: 'Inglés',
        country: 'Estados Unidos',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imdbID: 'tt0245429',
        title: 'Spirited Away',
        releaseYear: 2001,
        directorId: 6,
        duration: 125,
        rating: 8.6,
        language: 'Japonés',
        country: 'Japón',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Movies', null, {});
  }
};
