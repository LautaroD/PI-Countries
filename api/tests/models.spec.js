const { Country, TouristActivity, conn } = require('../src/db.js');

describe('[=======Country model========]', () => {
  beforeAll(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));

  describe('Validators', () => {
    beforeEach(() => Country.sync({ force: true }));

    it('should throw an error if name is null', (done) => {
      Country.create({})
        .then(() => done(new Error('It requires a valid name')))
        .catch(() => done());
    });

    it('Debería tirar error si la ID no es válida', async () => {
      expect.assertions(1);
      try {
        await Country.create({
          id: 'ARGENTINA',
          name: 'Argentina',
          imgBandera: 'bandera?',
          continente: 'South America',
          capital: 'Buenos Aires',
        });
      } catch (error) {
        expect(error.message).toBeDefined();
      }
    });

    it('Debería funcionar si los datos requeridos son correctos', async () => {
      const result = await Country.create({
        id: 'ARG',
        name: 'Argentina',
        imgBandera: 'bandera?',
        continente: 'South America',
        capital: 'Buenos Aires',
      })
      expect(result.toJSON()).toEqual({
        id: 'ARG',
        name: 'Argentina',
        imgBandera: 'bandera?',
        continente: 'South America',
        capital: 'Buenos Aires',
        subRegion: null,
        area: null,
        poblacion: null
      });
    });

    afterAll(() => Country.sync({ force: true }));
  });
});

describe('[===Tourist Activity model====]', () => {

  describe('Validators', () => {
    beforeEach(() => TouristActivity.sync({ force: true }));

    it('Debería tirar error si los datos no son válidos', async () => {
      expect.assertions(1);
      try {
        await TouristActivity.create({});
      } catch (error) {
        expect(error.message).toBeDefined();
      }
    });

    it('Debería tirar error si el nombre no es válido', async () => {
      expect.assertions(1);
      try {
        await TouristActivity.create({
          nombre: null,
          dificultad: 4,
          duracion: null,
          temporada: 'invierno'
        });
      } catch (error) {
        expect(error.message).toBeDefined();
      }
    });

    it('Debería tirar error si la dificultad es mayor a 5', async () => {
      expect.assertions(1);
      try {
        await TouristActivity.create({
          nombre: 'Testing',
          dificultad: 6,
          duracion: null,
          temporada: 'invierno'
        });
      } catch (error) {
        expect(error.message).toBeDefined();
      }
    });

    it('Debería tirar error si la temporada no es válida', async () => {
      expect.assertions(1);
      try {
        await TouristActivity.create({
          nombre: 'Testing',
          dificultad: 5,
          duracion: null,
          temporada: 'iVvinrno'
        });
      } catch (error) {
        expect(error.message).toBeDefined();
      }
    });

    it('Debería funcionar si los datos requeridos son correctos', async () => {
      const result = await TouristActivity.create({
        nombre: 'Esqui',
        dificultad: 4,
        temporada: 'invierno',
      })
      expect(result.toJSON()).toEqual({
        id: 1,
        nombre: 'Esqui',
        dificultad: 4,
        duracion: null,
        temporada: 'invierno',
      });
    });

    afterAll(() => TouristActivity.sync({ force: true }));
  });
});