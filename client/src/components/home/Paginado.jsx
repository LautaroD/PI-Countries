import React from 'react'

export default function Paginado({ ITEMS_PER_PAGE, paises, paginado }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(paises / ITEMS_PER_PAGE); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul>
                {pageNumbers && pageNumbers.map(number => (
                    <li key={number}>
                        <button onClick={() => paginado(number)}>{number}</button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

