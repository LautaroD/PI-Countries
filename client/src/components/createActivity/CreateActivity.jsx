import React, { useState } from 'react';
// import axios from 'axios';
// import { connect } from 'react-redux';
import style from './assets/CreateActivity.module.css'

const CreateActivity = () => {
    const [state, setState] = useState({
        nombre: '',
        dificultad: 0,
        duracion: 0,
        temporada: '',
        pais: ['Argentina', 'Uruguay']
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = JSON.stringify(state);
        // console.log(data)
        fetch('http://localhost:3001/activity', {
            method: 'POST',
            body: data,
            headers: new Headers({ "Content-Type": "application/json" })
        })
        // console.log(data)
        // axios.post('http://localhost:3001/activity', data)
        //     .then(response => console.log(response.data))
        //     .catch(error => console.log(error))
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
                    <input
                        type="number"
                        name="dificultadActividad"
                        id="dificultadActividad"
                        value={state.dificultad}
                        onChange={(e) => setState({ ...state, dificultad: e.target.value })}
                    /></label>
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
        </div>
    )
}

export default CreateActivity;