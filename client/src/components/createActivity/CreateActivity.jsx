import React, { useState, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import SearchBar from '../navbar/SearchBar';
// import axios from 'axios';
// import { connect } from 'react-redux';
import style from './assets/CreateActivity.module.css'
import { updateCountries, resetCountries } from '../../redux/actions';

const CreateActivity = ({ updateCountries, resetCountries }) => {
    // const dispatch = useDispatch();

    const paises = useSelector((state) => state.countryNames);
    // const paisesCopy = useSelector((state) => state.countriesCopy);
    const [state, setState] = useState({
        nombre: '',
        dificultad: 0,
        duracion: 0,
        temporada: '',
        pais: []
    });

    const selectCountry = (e) => {
        e.preventDefault();
        // console.log(e);
        //console.log(e.target.innerText.substring(0, e.target.innerText.length - 1));
        let country = (e.target.innerText.substring(0, e.target.innerText.length - 1));
        updateCountries(country)
        setState({ ...state, pais: [...state.pais, country] });
        // const paisesSelec = paisesCopy.filter(pais => !state.pais.includes(pais.name))
        // console.log(paisesSelec)
    }

    const unSelectCountry = (e) => {
        e.preventDefault();
        //console.log(e)
        let country = (e.target.innerText.substring(0, e.target.innerText.length - 1));
        setState({ ...state, pais: [...state.pais].filter(e => e !== country) })
        console.log(state.pais)
        // resetCountries(state.pais)
    }

    useEffect(() => {
        resetCountries(state.pais)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.pais])


    const handleSubmit = (e) => {
        e.preventDefault();
        if (state.nombre.length < 1 || state.dificultad === 0 || state.duracion === 0 || state.temporada.length < 1 || state.pais.length < 1) {
            return alert('Faltan completar datos')
        }
        const data = JSON.stringify(state);
        // console.log(data)
        fetch('http://localhost:3001/activity', {
            method: 'POST',
            body: data,
            headers: new Headers({ "Content-Type": "application/json" })
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className={style.formulario}>
                <label htmlFor='nameActividad'>Name:
                    <input
                        type="text"
                        name="nameActividad"
                        id="nameActividad"
                        value={state.nombre}
                        placeholder='Actividad...'
                        onChange={(e) => setState({ ...state, nombre: e.target.value })}
                    /></label>
                <label htmlFor='dificultadActividad'>Dificultad:
                    <select value={state.dificultad} onChange={(e) => setState({ ...state, dificultad: e.target.value })}>
                        <option value="noValue">---</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </label>
                <label htmlFor='duracionActividad'>Duracion:
                    <input
                        type="number"
                        name="duracionActividad"
                        id="duracionActividad"
                        value={state.duracion}
                        onChange={(e) => setState({ ...state, duracion: e.target.value })}
                    /></label>
                <label>
                    Temporada:
                    <select value={state.temporada} onChange={(e) => setState({ ...state, temporada: e.target.value })}>
                        <option value="noValue">---</option>
                        <option value="verano">Verano</option>
                        <option value="otoño">Otoño</option>
                        <option value="invierno">Invierno</option>
                        <option value="primavera">Primavera</option>
                    </select>
                </label>
                <button type='submit'>Crear</button>
            </form>
            <SearchBar isInForm={true} dataFromForm={state.pais} />
            <div className={style.cotainerCountries}>
                {paises.map(e => (
                    <span key={e}>
                        <form onSubmit={(e) => selectCountry(e)}>
                            <label>{e}</label>
                            <button type='submit'>X</button>
                        </form>
                    </span>
                ))}
            </div>
            <div className={style.cotainerCountries}>
                {state.pais.map(e => (
                    <span key={e}>
                        <form onSubmit={(e) => unSelectCountry(e)}>
                            <label>{e}</label>
                            <button type='submit'>X</button>
                        </form>
                    </span>
                ))}
            </div>
        </div >
    )
}

export default connect(null, { updateCountries, resetCountries })(CreateActivity)