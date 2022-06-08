// const { expect } = require('chai');
const request = require('supertest');
const app = require('../src/app.js');
const { Country, TouristActivity, conn } = require('../src/db.js');
jest.setTimeout(20000);
const agent = request(app);

const aT = {
  nombre: 'Esqui',
  dificultad: '3',
  duracion: '5',
  temporada: 'invierno'
};

xdescribe('[=======Country routes=======]', () => {
  beforeAll(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));

  beforeAll(() => Country.sync({ force: true }))

  describe('GET /countries', () => {
    it('Debería obtener 200 al llamar por 1era vez a la API', async () => {
      const result = await agent.get('/countries');
      expect(result.statusCode).toBe(200);
    });
    it('Debería obtener 200 pasando por parametro ID válido', async () => {
      const result = await agent.get('/countries/ARG');
      expect(result.statusCode).toBe(200);
    });
    it('Debería obtener 400 pasando por parametro ID inválido', async () => {
      const result = await agent.get('/countries/ADARG');
      expect(result.statusCode).toBe(400);

    });
    it('Debería obtener 200 pasando por query nombre válido', async () => {
      const result = await agent.get('/countries?name=Argentina');
      expect(result.statusCode).toBe(200)
    });
    it('Debería obtener 400 pasando por query nombre inválido', async () => {
      const result = await agent.get('/countries?name=Argfdddfentina');
      expect(result.statusCode).toBe(400);
    });
  });
});

xdescribe('[========Model routes========]', () => {

  describe('GET /activities', () => {
    TouristActivity.create(aT)
    it('Debería obtener 200', async () => {
      const result = await agent.get('/activities');
      expect(result.statusCode).toBe(200)
    });
    it('Debería obtener 200 pasando por query un nombre', async () => {
      const result = await agent.get('/getActivitiesByName?name=Esqui');
      expect(result.statusCode).toBe(200)
    });
    it('Debería obtener 404 si no se pasa un nombre válido', async () => {
      const result = await agent.get('/getActivitiesByName?name=adsadsasda');
      expect(result.statusCode).toBe(404)
    });
    it('Debería obtener 404 si no se pasa ningún parametro', async () => {
      const result = await agent.get('/getActivitiesByName?name=');
      expect(result.statusCode).toBe(404)
    });
  })

  describe('POST /activities', () => {
    beforeAll(() => TouristActivity.sync({ force: true }))

    it('Debería obtener 500 si no se pasan los parametros necesarios', async () => {
      const result = await agent.post('/activity');
      expect(result.statusCode).toBe(500)
    });
    it('Debería obtener 200 si se pasan los parametros necesarios', async () => {
      const result = await agent.post('/activity').send({
        nombre: 'Futbol',
        dificultad: '5',
        duracion: '2',
        temporada: 'otoño',
        pais: ['Argentina']
      });
      expect(result.statusCode).toBe(200)
    });

    afterAll(() => TouristActivity.sync({ force: true }))
  })

})

