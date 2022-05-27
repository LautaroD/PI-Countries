import React from 'react';
import style from './assets/CardPais.module.css'

function CardPais({ id, name, imgBandera, capital, poblacion, continente }) {

    return (
        <div className={style.card}>
            <div>
                {/* <p>ID: {id}</p> */}
                <img src={`${imgBandera}`} alt="Bandera" width="140" height="70" />
                <h2>{name}</h2>
                <p>Capital: {capital}</p>
                <p>Poblacion: {poblacion.toLocaleString('es')}</p>
                <p>Continente: {continente}</p>
            </div>
            <button className={style.cardButton}>More info</button>
        </div >
    )
}

export default CardPais;