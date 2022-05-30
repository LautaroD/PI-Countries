import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';
import { getOneCountry } from '../../redux/actions';

function DetailCountry({ getOneCountry }) {
  const infoPais = useSelector((state) => state.country);
  const dispatch = useDispatch();
  let location = useLocation();
  const nameCountry = location.pathname.substring(8, location.pathname.length);

  useEffect(() => {
    dispatch(() => getOneCountry(nameCountry))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // const actividadesTuristicas = infoPais[0].touristActivities.forEach(element => {   });
  // console.log(touristActivities)
  console.log(infoPais)
  return (
    <div>
      <h1>Hello</h1>
      {infoPais.map(e =>
      (<div key={e.id}>
        <p>id={e.id}</p>
        <p>name={e.name}</p>
        <p>capital={e.capital}</p>
        <p>poblacion={e.poblacion.toLocaleString('es')}</p>
        <p>continente={e.continente}</p>
        <p>subRegion={e.subRegion}</p>
        <p>Area={e.area.toLocaleString('es')}km2</p>
        <h2>Actividades Turisticas={e.touristActivities.map(e => (
          <div key={e.id}>
            <p>Nombre: {e.nombre}</p>
            <p>Dificultad: {e.dificultad}</p>
            <p>Duracion: {e.duracion}</p>
            <p>Temporada: {e.temporada}</p>
          </div>
        ))}</h2>
        <img src={`${e.imgBandera}`} alt="Bandera" width="350" height="200" />
      </div>)
      )
      }
    </div>
  )
}

export default connect(null, { getOneCountry })(DetailCountry)