import React from 'react';
import style from './assets/CardPais.module.css';
import { Link } from 'react-router-dom';

function CardPais({ id, name, imgBandera, capital, poblacion, continente }) {

    return (
        <div >
            <div className={style.card}>
                {/* <p>ID: {id}</p> */}
                <img className={style.bandera} src={`${imgBandera}`} alt="Bandera" width="100%" height="39%" />
                <h2>{name}</h2>
                {/* <p>Capital: {capital}</p> */}
                {/* <p>Poblacion: {poblacion.toLocaleString('es')}</p> */}
                <p>Continente: {continente}</p>
                <Link to={`detail/${name}`}>
                    <button className={style.cardButton}>More info</button>
                </Link>
            </div>
        </div >
    )
}

export default CardPais;