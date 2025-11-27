"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Actors", [
      // ───────────────────────────────────────────────
      // Interstellar
      // ───────────────────────────────────────────────
      {
        name: "Matthew McConaughey",
        nationality: "American",
        birthYear: 1969,
        birthPlace: "Uvalde, Texas, USA",
        notableAwards: JSON.stringify([
          "1 Óscar",
          "2 Globos de Oro",
          "Premio del Sindicato de Actores"
        ]),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Anne Hathaway",
        nationality: "American",
        birthYear: 1982,
        birthPlace: "Brooklyn, New York, USA",
        notableAwards: JSON.stringify([
          "1 Óscar",
          "1 Globo de Oro",
          "1 Emmy"
        ]),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Jessica Chastain",
        nationality: "American",
        birthYear: 1977,
        birthPlace: "Sacramento, California, USA",
        notableAwards: JSON.stringify([
          "1 Óscar",
          "1 Globo de Oro"
        ]),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Michael Caine",
        nationality: "British",
        birthYear: 1933,
        birthPlace: "London, England",
        notableAwards: JSON.stringify([
          "2 Óscares",
          "3 Globos de Oro"
        ]),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Casey Affleck",
        nationality: "American",
        birthYear: 1975,
        birthPlace: "Falmouth, Massachusetts, USA",
        notableAwards: JSON.stringify(["1 Óscar"]),
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // ───────────────────────────────────────────────
      // The Matrix
      // ───────────────────────────────────────────────
      {
        name: "Keanu Reeves",
        nationality: "Canadian",
        birthYear: 1964,
        birthPlace: "Beirut, Lebanon",
        notableAwards: JSON.stringify([
          "MTV Movie Awards",
          "People's Choice Awards"
        ]),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Carrie-Anne Moss",
        nationality: "Canadian",
        birthYear: 1967,
        birthPlace: "Burnaby, Canada",
        notableAwards: JSON.stringify([
          "Independent Spirit Award"
        ]),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Laurence Fishburne",
        nationality: "American",
        birthYear: 1961,
        birthPlace: "Augusta, Georgia, USA",
        notableAwards: JSON.stringify([
          "Emmy",
          "Tony Award"
        ]),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Hugo Weaving",
        nationality: "Australian",
        birthYear: 1960,
        birthPlace: "Ibadan, Nigeria",
        notableAwards: JSON.stringify(["AActa Award"]),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Joe Pantoliano",
        nationality: "American",
        birthYear: 1951,
        birthPlace: "Hoboken, New Jersey, USA",
        notableAwards: JSON.stringify(["Primetime Emmy"]),
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // ───────────────────────────────────────────────
      // Joker
      // ───────────────────────────────────────────────
      {
        name: "Joaquin Phoenix",
        nationality: "American",
        birthYear: 1974,
        birthPlace: "San Juan, Puerto Rico",
        notableAwards: JSON.stringify([
          "1 Óscar",
          "2 Globos de Oro",
          "Grammy Award"
        ]),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Robert De Niro",
        nationality: "American",
        birthYear: 1943,
        birthPlace: "New York City, USA",
        notableAwards: JSON.stringify([
          "2 Óscares",
          "1 Globo de Oro",
          "Premio Cecil B. DeMille"
        ]),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Zazie Beetz",
        nationality: "German-American",
        birthYear: 1991,
        birthPlace: "Berlin, Germany",
        notableAwards: JSON.stringify(["Nominación al Emmy"]),
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // ───────────────────────────────────────────────
      // Parasite
      // ───────────────────────────────────────────────
      {
        name: "Song Kang-ho",
        nationality: "South Korean",
        birthYear: 1967,
        birthPlace: "Gimhae, South Korea",
        notableAwards: JSON.stringify([
          "Premio del Cine Asiático",
          "Blue Dragon Film Awards"
        ]),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Cho Yeo-jeong",
        nationality: "South Korean",
        birthYear: 1981,
        birthPlace: "Seoul, South Korea",
        notableAwards: JSON.stringify([
          "Blue Dragon Film Award"
        ]),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Lee Sun-kyun",
        nationality: "South Korean",
        birthYear: 1975,
        birthPlace: "Seoul, South Korea",
        notableAwards: JSON.stringify(["Korean Association of Film Critics Award"]),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Park So-dam",
        nationality: "South Korean",
        birthYear: 1991,
        birthPlace: "Seoul, South Korea",
        notableAwards: JSON.stringify(["Baeksang Arts Award"]),
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // ───────────────────────────────────────────────
      // Spirited Away
      // ───────────────────────────────────────────────
      {
        name: "Rumi Hiiragi",
        nationality: "Japanese",
        birthYear: 1987,
        birthPlace: "Tokyo, Japan",
        notableAwards: JSON.stringify([]),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Miyu Irino",
        nationality: "Japanese",
        birthYear: 1988,
        birthPlace: "Tokyo, Japan",
        notableAwards: JSON.stringify(["Tokyo Anime Award"]),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Mari Natsuki",
        nationality: "Japanese",
        birthYear: 1952,
        birthPlace: "Tokyo, Japan",
        notableAwards: JSON.stringify([]),
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // ───────────────────────────────────────────────
      // The Wolf of Wall Street
      // ───────────────────────────────────────────────
      {
        name: "Leonardo DiCaprio",
        nationality: "American",
        birthYear: 1974,
        birthPlace: "Los Angeles, California, USA",
        notableAwards: JSON.stringify([
          "1 Óscar",
          "3 Globos de Oro",
        ]),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Jonah Hill",
        nationality: "American",
        birthYear: 1983,
        birthPlace: "Los Angeles, California, USA",
        notableAwards: JSON.stringify([
          "Nominaciones al Óscar"
        ]),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Margot Robbie",
        nationality: "Australian",
        birthYear: 1990,
        birthPlace: "Dalby, Australia",
        notableAwards: JSON.stringify(["Nominaciones al Óscar"]),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Kyle Chandler",
        nationality: "American",
        birthYear: 1965,
        birthPlace: "Buffalo, New York, USA",
        notableAwards: JSON.stringify(["Primetime Emmy"]),
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // ───────────────────────────────────────────────
      // Avengers: Endgame
      // ───────────────────────────────────────────────
      {
        name: "Robert Downey Jr.",
        nationality: "American",
        birthYear: 1965,
        birthPlace: "New York City, USA",
        notableAwards: JSON.stringify([
          "2 Globos de Oro",
          "BAFTA Award"
        ]),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Chris Evans",
        nationality: "American",
        birthYear: 1981,
        birthPlace: "Boston, Massachusetts, USA",
        notableAwards: JSON.stringify(["Teen Choice Awards"]),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Scarlett Johansson",
        nationality: "American",
        birthYear: 1984,
        birthPlace: "New York City, USA",
        notableAwards: JSON.stringify([
          "BAFTA Award",
          "Tony Award"
        ]),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Chris Hemsworth",
        nationality: "Australian",
        birthYear: 1983,
        birthPlace: "Melbourne, Australia",
        notableAwards: JSON.stringify(["Teen Choice Awards"]),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Mark Ruffalo",
        nationality: "American",
        birthYear: 1967,
        birthPlace: "Kenosha, Wisconsin, USA",
        notableAwards: JSON.stringify(["Emmy", "SAG Awards"]),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Jeremy Renner",
        nationality: "American",
        birthYear: 1971,
        birthPlace: "Modesto, California, USA",
        notableAwards: JSON.stringify(["Nominaciones al Óscar"]),
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // ───────────────────────────────────────────────
      // Shang-Chi
      // ───────────────────────────────────────────────
      {
        name: "Simu Liu",
        nationality: "Canadian",
        birthYear: 1989,
        birthPlace: "Harbin, China",
        notableAwards: JSON.stringify(["ACTRA Awards"]),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Awkwafina",
        nationality: "American",
        birthYear: 1988,
        birthPlace: "New York City, USA",
        notableAwards: JSON.stringify([
          "Globo de Oro"
        ]),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Tony Leung Chiu-wai",
        nationality: "Hong Kong",
        birthYear: 1962,
        birthPlace: "Hong Kong",
        notableAwards: JSON.stringify(["Cannes Best Actor"]),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Meng'er Zhang",
        nationality: "Chinese",
        birthYear: 1987,
        birthPlace: "Nanjing, China",
        notableAwards: JSON.stringify([]),
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // ───────────────────────────────────────────────
      // Pulp Fiction
      // ───────────────────────────────────────────────
      {
        name: "John Travolta",
        nationality: "American",
        birthYear: 1954,
        birthPlace: "Englewood, New Jersey, USA",
        notableAwards: JSON.stringify([
          "Golden Globe",
          "Primetime Emmy"
        ]),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Samuel L. Jackson",
        nationality: "American",
        birthYear: 1948,
        birthPlace: "Washington, D.C., USA",
        notableAwards: JSON.stringify([
          "Honorary Oscar",
          "BAFTA Award"
        ]),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Uma Thurman",
        nationality: "American",
        birthYear: 1970,
        birthPlace: "Boston, Massachusetts, USA",
        notableAwards: JSON.stringify(["Nominación al Óscar"]),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Bruce Willis",
        nationality: "American",
        birthYear: 1955,
        birthPlace: "Idar-Oberstein, Germany",
        notableAwards: JSON.stringify(["2 Emmys", "1 Globo de Oro"]),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Actors", null, {});
  },
};