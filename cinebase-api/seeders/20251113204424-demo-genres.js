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

    await queryInterface.bulkInsert('Genres', [
      {
        genre: 'Acción',
        description: 'Películas con mucha adrenalina',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        genre: 'Comedia',
        description: 'Películas para reírse',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        genre: 'Drama',
        description: 'Historias serias y emocionales',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        genre: 'Terror',
        description: 'Películas diseñadas para asustar',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        genre: 'Ciencia Ficción',
        description: 'Tecnología avanzada y mundos futuristas',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        genre: 'Fantasía',
        description: 'Mundos mágicos y criaturas irreales',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        genre: 'Romance',
        description: 'Historias de amor',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        genre: 'Aventura',
        description: 'Viajes y exploraciones emocionantes',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        genre: 'Animación',
        description: 'Películas animadas para todas las edades',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        genre: 'Thriller',
        description: 'Suspenso y tensión constante',
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
    await queryInterface.bulkDelete('Genres', null, {});
  }
};
