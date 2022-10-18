import express from "express";
import "express-async-errors";

import prisma from "./lib/prisma/client";

const app = express();

app.get("/planets", async (request, response) => {
    const planets = await prisma.planet.findMany();

    response.json(planets);
});

export default app;

// app.get("/math", (request, response) => {
//     axios.get("http://numbersapi.com/random/math").then((res) => {
//         response.send(res.data);
//     });

//     response.header("Access-Control-Allow-Origin", "*");
// });
