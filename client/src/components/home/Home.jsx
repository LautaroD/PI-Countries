import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import CardPais from './CardPais';
import { getAllCountries } from '../../redux/actions';
import style from './assets/Home.module.css';
import Paginado from './Paginado';
import Filtrado from './Filtrado';

let ITEMS_PER_PAGE = 10;

export const Home = ({ getAllCountries }) => {
    const paises = useSelector((state) => state.countries);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    if (currentPage === 1) ITEMS_PER_PAGE = 9;
    else ITEMS_PER_PAGE = 10;
    const indexLastCountrie = currentPage * ITEMS_PER_PAGE;
    const indexFirstCountrie = indexLastCountrie - ITEMS_PER_PAGE;
    const currentCountries = paises.slice(indexFirstCountrie, indexLastCountrie);

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const dispatch = useDispatch();

    useEffect(() => {
        if (!paises) return
        dispatch(() => getAllCountries())
        setIsLoading(false)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        setCurrentPage(1);
    }, [paises])

    const loader = () => (
        <div className={style.loaderRectangle}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )


    if (currentPage < 1) setCurrentPage(1);
    if (currentPage > 25) setCurrentPage(25);
    return (
        <div className={style.container}>
            {(isLoading) ? loader() :
                <>
                    <div className={style.filter}>
                        <Filtrado />
                    </div>
                    <div className={style.cards}>
                        {currentCountries.map(e => <CardPais
                            key={e.id}
                            id={e.id}
                            name={e.name}
                            imgBandera={e.imgBandera}
                            capital={e.capital}
                            poblacion={e.poblacion}
                            continente={e.continente}
                        />)}
                    </div>
                    <Paginado ITEMS_PER_PAGE={ITEMS_PER_PAGE} paises={paises.length} paginado={paginado} />
                </>
            }
        </div>
    )
}

export default connect(null, { getAllCountries })(Home)