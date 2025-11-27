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

    await queryInterface.bulkInsert('MovieGenres', [
      // Interstellar → Sci-Fi, Drama, Aventura
      { movieId: 1, genreId: 5, createdAt: new Date(), updatedAt: new Date() },
      { movieId: 1, genreId: 3, createdAt: new Date(), updatedAt: new Date() },
      { movieId: 1, genreId: 8, createdAt: new Date(), updatedAt: new Date() },

      // Matrix → Sci-Fi, Acción, Thriller
      { movieId: 2, genreId: 5, createdAt: new Date(), updatedAt: new Date() },
      { movieId: 2, genreId: 1, createdAt: new Date(), updatedAt: new Date() },
      { movieId: 2, genreId: 10, createdAt: new Date(), updatedAt: new Date() },

      // Joker → Drama, Thriller
      { movieId: 3, genreId: 3, createdAt: new Date(), updatedAt: new Date() },
      { movieId: 3, genreId: 10, createdAt: new Date(), updatedAt: new Date() },

      // Parasite → Thriller, Drama
      { movieId: 4, genreId: 10, createdAt: new Date(), updatedAt: new Date() },
      { movieId: 4, genreId: 3, createdAt: new Date(), updatedAt: new Date() },

      // Schindler's List → Drama
      { movieId: 5, genreId: 3, createdAt: new Date(), updatedAt: new Date() },

      // Wolf of Wall Street → Drama, Comedia
      { movieId: 6, genreId: 3, createdAt: new Date(), updatedAt: new Date() },
      { movieId: 6, genreId: 2, createdAt: new Date(), updatedAt: new Date() },

      // Avengers Endgame → Acción, Fantasía, Sci-Fi
      { movieId: 7, genreId: 1, createdAt: new Date(), updatedAt: new Date() },
      { movieId: 7, genreId: 6, createdAt: new Date(), updatedAt: new Date() },
      { movieId: 7, genreId: 5, createdAt: new Date(), updatedAt: new Date() },

      // Pulp Fiction → Acción, Thriller, Drama
      { movieId: 8, genreId: 1, createdAt: new Date(), updatedAt: new Date() },
      { movieId: 8, genreId: 10, createdAt: new Date(), updatedAt: new Date() },
      { movieId: 8, genreId: 3, createdAt: new Date(), updatedAt: new Date() },

      // Shang-Chi → Acción, Fantasía, Aventura
      { movieId: 9, genreId: 1, createdAt: new Date(), updatedAt: new Date() },
      { movieId: 9, genreId: 6, createdAt: new Date(), updatedAt: new Date() },
      { movieId: 9, genreId: 8, createdAt: new Date(), updatedAt: new Date() },

      // Spirited Away → Fantasía, Animación, Aventura
      { movieId: 10, genreId: 6, createdAt: new Date(), updatedAt: new Date() },
      { movieId: 10, genreId: 9, createdAt: new Date(), updatedAt: new Date() },
      { movieId: 10, genreId: 8, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('MovieGenres', null, {});
  }
};
