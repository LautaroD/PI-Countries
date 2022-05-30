// import React, { useEffect, useState } from 'react';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import style from './assets/Nav.module.css';
import SearchBar from './SearchBar';

export default function Nav() {

    let location = useLocation();
    if (location.pathname === '/') return null

    return (

        <div className={style.navbar}>
            <ul>
                <li><NavLink to="/home" activeClassName={style.active}>Inicio</NavLink></li>
                <li><NavLink to="/countries" activeClassName={style.active}>Paises</NavLink></li>
                <li><NavLink to="/activity" activeClassName={style.active}>Turismo</NavLink></li>
            </ul>
            <span className={style.searchBar}>
                <SearchBar />
            </span>
        </div>
    )
}