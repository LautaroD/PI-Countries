/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, TouristActivity, conn } = require('../../src/db.js');

const agent = session(app);
const country = {
  id: 'CZR',
  name: 'Czech Republic',
  imgBandera: 'https://flagcdn.com/cz.svg',
  continente: 'Europe',
  capital: 'Prague'
};


describe('Country routes', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  // beforeEach(() => Country.sync({ force: true }) // Comentado para que funcionen el resto de los tests
  //   .then(() => Country.create(country)));

  describe('GET /countries', () => {
    it('should get 200', () =>
      agent.get('/countries').expect(200)
    );
    it('Debería obtener 200 pasando por parametro ID válido', () =>
      agent.get('/countries/ARG').expect(200)
    );
    it('Debería obtener 400 pasando por parametro ID inválido', () =>
      agent.get('/countries/ADARG').expect(400)
    );
    it('Debería obtener 200 pasando por query nombre válido', () =>
      agent.get('/countries?name=Argentina').expect(200)
    );
  });
});

describe('Activities routes', () => {
  it('Debería obtener 200', () =>
    agent.get('/activities').expect(200)
  );
  it('Debería obtener 200 pasando por query un nombre', () =>
    agent.get('/getActivitiesByName?name=Esqui').expect(200)
  );
  it('Debería obtener 404 si no se pasa un nombre', () =>
    agent.get('/getActivitiesByName?name=').expect(404)
  );
  it('Debería obtener 404 si no se pasan los parametros necesarios', () =>
    agent.post('/activities').expect(404)
  );

})

