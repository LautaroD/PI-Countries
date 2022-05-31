import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import CardPais from './CardPais';
import { getAllCountries } from '../../redux/actions';
import style from './assets/Home.module.css';
import Paginado from './Paginado';
import Filtrado from './Filtrado';

const ITEMS_PER_PAGE = 10;

export const Home = ({ getAllCountries }) => {
    const paises = useSelector((state) => state.countries);
    const [currentPage, setCurrentPage] = useState(1);

    const indexLastCountrie = currentPage * ITEMS_PER_PAGE;
    const indexFirstCountrie = indexLastCountrie - ITEMS_PER_PAGE;
    const currentCountries = paises.slice(indexFirstCountrie, indexLastCountrie);

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    const dispatch = useDispatch();

    useEffect(() => {
        if (!paises) return
        dispatch(() => getAllCountries())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div >
            <Filtrado />
            <Paginado ITEMS_PER_PAGE={ITEMS_PER_PAGE} paises={paises.length} paginado={paginado} />
            <div className={style.cards}>
                {currentCountries.map(e => <CardPais
                    key={e.id}
                    id={e.id}
                    name={e.name}
                    imgBandera={e.imgBandera}
                    capital={e.capital}
                    poblacion={e.poblacion}
                    continente={e.continente}
                />)
                }
            </div>
        </div>
    )
}

export default connect(null, { getAllCountries })(Home)