'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert("MovieActors", [
      // Interstellar (id: 1)
      { movieId: 1, actorId: 1, characterName: "Joseph Cooper" }, // McConaughey
      { movieId: 1, actorId: 2, characterName: "Murph (adult)" },
      { movieId: 1, actorId: 3, characterName: "Brand" },
      { movieId: 1, actorId: 4, characterName: "Tom Cooper" },
      { movieId: 1, actorId: 5, characterName: "Professor Brand" },

      // The Matrix (id: 2)
      { movieId: 2, actorId: 6, characterName: "Neo" },
      { movieId: 2, actorId: 7, characterName: "Morpheus" },
      { movieId: 2, actorId: 8, characterName: "Trinity" },
      { movieId: 2, actorId: 9, characterName: "Agent Smith" },
      { movieId: 2, actorId: 10, characterName: "Cypher" },

      // Joker (id: 3)
      { movieId: 3, actorId: 11, characterName: "Arthur Fleck / Joker" },
      { movieId: 3, actorId: 12, characterName: "Sophie Dumond" },
      { movieId: 3, actorId: 13, characterName: "Murray Franklin" },

      // Parasite (id: 4)
      { movieId: 4, actorId: 14, characterName: "Kim Ki-taek" },
      { movieId: 4, actorId: 15, characterName: "Kim Ki-woo" },
      { movieId: 4, actorId: 16, characterName: "Park Yeon-kyo" },
      { movieId: 4, actorId: 17, characterName: "Kim Chung-sook" },

      // Spirited Away (id: 10)
      { movieId: 10, actorId: 18, characterName: "Chihiro / Sen" },
      { movieId: 10, actorId: 19, characterName: "Haku" },
      { movieId: 10, actorId: 20, characterName: "Yubaba / Zeniba" },

      // Avengers: Endgame (id: 7)
      { movieId: 7, actorId: 25, characterName: "Tony Stark / Iron Man" },
      { movieId: 7, actorId: 26, characterName: "Steve Rogers / Captain America" },
      { movieId: 7, actorId: 27, characterName: "Thor" },
      { movieId: 7, actorId: 28, characterName: "Natasha Romanoff / Black Widow" },
      { movieId: 7, actorId: 29, characterName: "Bruce Banner / Hulk" },
      { movieId: 7, actorId: 30, characterName: "Clint Barton / Hawkeye" },

      // Shang-Chi (id: 9)
      { movieId: 9, actorId: 31, characterName: "Shang-Chi" },
      { movieId: 9, actorId: 32, characterName: "Xu Wenwu" },
      { movieId: 9, actorId: 33, characterName: "Katy" },
      { movieId: 9, actorId: 34, characterName: "Xialing" },

      // Pulp Fiction (id: 8)
      { movieId: 8, actorId: 35, characterName: "Vincent Vega" },
      { movieId: 8, actorId: 36, characterName: "Jules Winnfield" },
      { movieId: 8, actorId: 37, characterName: "Mia Wallace" },
      { movieId: 8, actorId: 38, characterName: "Butch Coolidge" },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("MovieActors", null, {});
  }
};