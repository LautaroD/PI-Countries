import React from 'react';
import style from './assets/Paginado.module.css';
import leftArrow from './assets/left-arrow.svg'
import rightArrow from './assets/right-arrow.svg'

export default function Paginado({ ITEMS_PER_PAGE, paises, paginado }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(paises / ITEMS_PER_PAGE); i++) {
        pageNumbers.push(i)
    }

    function goToNextPage() {
        paginado((pageNumber) => pageNumber + 1)
    }

    function goToPreviousPage() {
        paginado((pageNumber) => pageNumber - 1)
    }

    return (
        <nav>
            <ul>
                {/* {pageNumbers && pageNumbers.map(number => (
                    <li key={number}>
                        <button onClick={() => paginado(number)}>{number}</button>
                    </li>
                ))} */}
                <button className={style.boton} onClick={() => goToPreviousPage()}> <img src={leftArrow} alt='HenryTravel' />  </button>
                <button className={style.boton} onClick={() => goToNextPage()}> <img src={rightArrow} alt='HenryTravel' /> </button>
            </ul>
        </nav>
    )
}

