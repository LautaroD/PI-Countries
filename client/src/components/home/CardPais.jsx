import React from 'react';

function CardPais({ id, name, imgBandera, capital, poblacion, continente }) {
    return (
        <div>CardPais:
            <p>ID: {id}</p>
            <p>Pais: {name}</p>
            <p>Capital: {capital}</p>
            <p>Poblacion: {poblacion.toLocaleString('es')}</p>
            <p>Continente: {continente}</p>
            <img src={`${imgBandera}`} alt="Bandera" width="320" height="170" />
        </div>
    )
}

export default CardPais;