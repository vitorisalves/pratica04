const supertest = require("supertest");

const app = require("./index");

const request = supertest(app);

test("Deve retorna 200 no GET", async function () {
  const response = await request.get("/");
  expect(response.status).toBe(200);
});

test("Deve retorna 201 no POST", async function () {
  const response = await request.post("/");
  expect(response.status).toBe(201);
});

test("Deve retorna 200 no PUT", async function () {
  const response = await request.put("/");
  expect(response.status).toBe(200);
});

test("Deve retorna 204 no DELETE", async function (){
  const response = await request.delete("/");
  expect(response.status).toBe(204);
});
