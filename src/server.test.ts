import supertest from "supertest";

import app from "./app";

import { prismaMock } from "./lib/prisma/client.mock";

const request = supertest(app);

test("GET /planets", async () => {
    const planets = [
        {
            id: 1,
            name: "Mercury",
            description: null,
            diameter: 1234,
            moons: 12,
            createdAt: "2022-10-18T08:55:19.088Z",
            updatedAt: "2022-10-18T08:54:50.422Z",
        },
        {
            id: 2,
            name: "Venus",
            description: null,
            diameter: 5678,
            moons: 2,
            createdAt: "2022-10-18T08:55:19.088Z",
            updatedAt: "2022-10-18T08:55:06.541Z",
        },
    ];

    //@ts-ignore
    prismaMock.planet.findMany.mockResolvedValue(planets);

    const response = await request
        .get("/planets")
        .expect(200)
        .expect("Content-Type", /application\/json/);

    expect(response.body).toEqual(planets);
});

test("POST /planets", async () => {
    const planet = {
        name: "Mercury",
        diameter: 1234,
        moons: 12,
    };

    const response = await request
        .post("/planets")
        .send(planet)
        .expect(201)
        .expect("Content-Type", /application\/json/);

    expect(response.body).toEqual(planet);
});
