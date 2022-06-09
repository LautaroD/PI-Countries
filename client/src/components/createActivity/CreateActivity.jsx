import React, { useState, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import SearchBar from '../navbar/SearchBar';
import style from './assets/CreateActivity.module.css'
import { updateCountries, resetCountries } from '../../redux/actions';

const CreateActivity = ({ updateCountries, resetCountries }) => {

    const paises = useSelector((state) => state.countryNames);
    const [state, setState] = useState({
        nombre: '',
        dificultad: 0,
        duracion: 0,
        temporada: '',
        pais: []
    });

    const selectCountry = (e) => {
        e.preventDefault();
        let country = (e.target.innerText.substring(0, e.target.innerText.length - 1));
        updateCountries(country)
        setState({ ...state, pais: [...state.pais, country] });
    }

    const unSelectCountry = (e) => {
        e.preventDefault();
        let country = (e.target.innerText.substring(0, e.target.innerText.length - 1));
        setState({ ...state, pais: [...state.pais].filter(e => e !== country) })
        console.log(state.pais)
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
        if (state.duracion < 1) return alert('La duración de la actividad no puede ser negativa!')
        if (state.duracion > 8) return alert('La duración de la actividad no puede durar mas de 8 horas!')
        if (state.nombre.length > 15) return alert('El nombre de la actividad es muy largo!')
        const data = JSON.stringify(state);
        fetch(`https://pi-countries-lautarod.herokuapp.com/activity`, {
            method: 'POST',
            body: data,
            headers: new Headers({ "Content-Type": "application/json" })
        })
        setState({ nombre: '', dificultad: 0, duracion: 0, temporada: '', pais: [] })
        alert('Actividad creada')
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className={style.formulario}>
                <label htmlFor='nameActividad'>Nombre:
                    <input
                        className={style.dataForm}
                        type="text"
                        name="nameActividad"
                        id="nameActividad"
                        value={state.nombre}
                        placeholder='Actividad...'
                        onChange={(e) => setState({ ...state, nombre: e.target.value })}
                        required
                    /></label>
                <label htmlFor='duracionActividad'>Duracion:
                    <input
                        className={style.dataForm}
                        type="number"
                        name="duracionActividad"
                        id="duracionActividad"
                        value={state.duracion}
                        onChange={(e) => setState({ ...state, duracion: e.target.value })}
                    /></label>
                <label>
                    Temporada:
                    <select className={style.dataForm} value={state.temporada} onChange={(e) => setState({ ...state, temporada: e.target.value })}>
                        <option value="null">---</option>
                        <option value="verano">Verano</option>
                        <option value="otoño">Otoño</option>
                        <option value="invierno">Invierno</option>
                        <option value="primavera">Primavera</option>
                    </select>
                </label>
                <label htmlFor='dificultadActividad'>Dificultad:
                    <select className={style.dataForm} value={state.dificultad} onChange={(e) => setState({ ...state, dificultad: e.target.value })}>
                        <option value="null">---</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </label>
                <button className={style.createButton} type='submit'>Crear</button>
            </form>
            <div className={style.containerSelector}>
                <div className={style.searchBar}>
                    <SearchBar isInForm={true} dataFromForm={state.pais} />
                </div>
                <div className={style.ultimoContainerCreo}>

                    <div className={style.cotainerCountries}>
                        <h4>Select</h4>
                        {paises.map(e => (
                            <span key={e}>
                                <form onSubmit={(e) => selectCountry(e)}>
                                    <label>{e}</label>
                                    <button className={style.button} type='submit'>x</button>
                                </form>
                            </span>
                        ))}
                    </div>
                    <div className={style.cotainerCountries}>
                        <h4>Selected</h4>
                        {state.pais.map(e => (
                            <span key={e}>
                                <form onSubmit={(e) => unSelectCountry(e)}>
                                    <label>{e}</label>
                                    <button className={style.button} type='submit'> x </button>
                                </form>
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default connect(null, { updateCountries, resetCountries })(CreateActivity)