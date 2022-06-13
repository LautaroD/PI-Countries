import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';
import { getOneCountry, clearDetailCountry } from '../../redux/actions';
import style from './assets/DetailCountry.module.css';

function DetailCountry({ getOneCountry, clearDetailCountry }) {
  const infoPais = useSelector((state) => state.country);
  const dispatch = useDispatch();
  let location = useLocation();
  const nameCountry = location.pathname.substring(8, location.pathname.length);

  useEffect(() => {
    dispatch(() => getOneCountry(nameCountry))
    return () => {
      clearDetailCountry();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={style.body}>
      {infoPais.map(e =>
      (<div className={style.none} key={e.id} >
        <h1>{e.name}</h1>
        <div className={style.container}>
          <img src={`${e.imgBandera}`} alt="Bandera" className={style.bandera} />
          <div className={style.detailCountry}>
            <h3>Capital: {e.capital}</h3>
            <h3>Población: {e.poblacion.toLocaleString('es')}</h3>
            <h3>Continente: {e.continente}</h3>
            <h3>SubRegion: {e.subRegion}</h3>
            <h3>Area: {e.area.toLocaleString('es')}km2</h3>
            <p>ID: {e.id}</p>
          </div>
          <div className={style.actividades} >
            <h2>Actividades Turisticas: {e.touristActivities.map(e => (
              <div className={style.actividad} key={e.id}>
                <hr></hr>
                <p>Nombre: {e.nombre}  </p>
                <p>Dificultad: {e.dificultad} </p>
                <p>Duracion: {e.duracion} hs</p>
                <p>Temporada: {e.temporada} </p>
              </div>
            ))}</h2>
          </div>
        </div>
      </div>
      )
      )
      }
    </div>
  )
}

export default connect(null, { getOneCountry, clearDetailCountry })(DetailCountry)