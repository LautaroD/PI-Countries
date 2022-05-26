// import React, { useEffect, useState } from 'react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Nav.module.css';

export default function Nav() {
    return (
        <div className={style.navbar}>
            <ul>
                <li><NavLink to="/home" activeClassName={style.active}>Inicio</NavLink></li>
                <li><NavLink to="/countries" activeClassName={style.active}>Paises</NavLink></li>
                <li><NavLink to="/activity" activeClassName={style.active}>Turismo</NavLink></li>

            </ul>
        </div>
    )
}