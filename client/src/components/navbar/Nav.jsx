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
                <li><NavLink to="/home" activeClassName={style.active}><button className={style.btn}>Inicio</button></NavLink></li>
                <li><NavLink to="/activity" activeClassName={style.active}><button className={style.btn}>Crear Actividad</button></NavLink></li>
            </ul>
            <span className={style.searchBar}>
                {
                    (location.pathname !== '/activity') ? <SearchBar /> : null
                }
            </span>
        </div>
    )
}