import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import CardPais from './CardPais';
import { getAllCountries, resetCountries } from '../../redux/actions';

// const ITEMS_PER_PAGE = 10;

export const Home = ({ getAllCountries, resetCountries }) => {
    const paises = useSelector((state) => state.countries)
    const dispatch = useDispatch();

    useEffect(() => {
        if (paises.length === 250) return
        dispatch(() => getAllCountries())
        //return () => resetCountries();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <div>
                {paises.map(e => <CardPais
                    key={e.id}
                    id={e.id}
                    name={e.name}
                    imgBandera={e.imgBandera}
                    capital={e.capital}
                    poblacion={e.poblacion}
                    continente={e.continente}
                />)}
            </div>
        </div>
    )
}

export default connect(null, { getAllCountries, resetCountries })(Home)