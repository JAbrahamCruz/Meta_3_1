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
    await queryInterface.bulkInsert('Directors', [
      {
        name: 'Alfonso Cuarón',
        nationality: 'Mexicano',
        birthYear: 1961,
        birthPlace: 'Ciudad de México',
        notableAwards: JSON.stringify([
          '2 Óscares',
          '3 Premios BAFTA',
          '2 Globos de Oro'
        ]),
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Christopher Nolan',
        nationality: 'Británico',
        birthYear: 1970,
        birthPlace: 'Londres, Reino Unido',
        notableAwards: JSON.stringify([
          'Óscar (Nominado)',
          '3 Premios BAFTA',
          'Globo de Oro'
        ]),
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Quentin Tarantino',
        nationality: 'Estadounidense',
        birthYear: 1963,
        birthPlace: 'Knoxville, Tennessee',
        notableAwards: JSON.stringify([
          '2 Óscares',
          '2 Globos de Oro',
          'Palma de Oro'
        ]),
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Greta Gerwig',
        nationality: 'Estadounidense',
        birthYear: 1983,
        birthPlace: 'Sacramento, California',
        notableAwards: JSON.stringify([
          'Globos de Oro',
          'Nominación al Óscar'
        ]),
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'James Cameron',
        nationality: 'Canadiense',
        birthYear: 1954,
        birthPlace: 'Kapuskasing, Ontario',
        notableAwards: JSON.stringify([
          '3 Óscares',
          '2 Globos de Oro',
          'Premios Saturn'
        ]),
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bong Joon-ho',
        nationality: 'Coreano',
        birthYear: 1969,
        birthPlace: 'Daegu, Corea del Sur',
        notableAwards: JSON.stringify([
          '4 Óscares',
          'Palma de Oro',
          'Premio BAFTA'
        ]),
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
    await queryInterface.bulkDelete('Directors', null, {});
  }
};
