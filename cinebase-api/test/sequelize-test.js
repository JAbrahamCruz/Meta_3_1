const db = require('../models');

async function test() {
    await db.sequelize.authenticate();
    console.log("Conexión OK");

    // console.log("\n== Películas SIN include (funciona sin asociaciones) ==");
    // const peliculas = await db.Movie.findAll();
    // console.log(peliculas.map(p => p.toJSON()));


    console.log("\n== Intentar include director (esto fallará si NO hay asociaciones) ==");
    try {
        const result = await db.Movie.findAll({
            include: [{
                model: db.Director,
                as: 'director',
                attributes: ['name', 'notableAwards']
            }]
        });

        console.log(result.map(r => r.toJSON()));
    } catch (error) {
        console.error("ERROR al hacer include:", error.message);
    }

    // console.log("\n== Consultar Directores con Películas (también fallará sin asociaciones) ==");
    // try {
    //     const result = await db.Director.findAll({
    //         include: [{ model: db.Pelicula, as: 'peliculas' }]
    //     });

    //     console.log(result.map(r => r.toJSON()));
    // } catch (error) {
    //     console.error("ERROR:", error.message);
    // }

    process.exit();
}

test();