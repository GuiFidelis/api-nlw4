import request from 'supertest';
import { getConnection } from 'typeorm';
import { app } from '../app';

import createConnection from '../database'

describe("User", () =>{

    beforeAll(async() => {
        const connection = await createConnection();
        await connection.runMigrations();
    });

    afterAll(async () => {
        const connection = getConnection();
        await connection.dropDatabase();
        await connection.close();
    });

    it("Should be able to create a new user", async () => {
        const response = await request(app).post("/users").send({
            email: "user@exemple.com",
            name: "User Exemple"
        });

        expect(response.status).toBe(201);
    })

    it("Shold not be able to create a user woth exist email", async () =>{
        const response = await request(app).post("/users").send({
            email: "user@exemple.com",
            name: "User Exemple"
        });

        expect(response.status).toBe(400);
    })
   
})