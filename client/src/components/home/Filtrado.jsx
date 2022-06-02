import React, { useState, useEffect } from 'react';
import { ordenamientoContinente, resetCountriesOrder, ordenAlfabetico, ordenPoblacional, getAllActivities, getOneActivitie } from '../../redux/actions'
import { connect, useSelector, useDispatch } from 'react-redux';
import style from './assets/Filtrado.module.css'

const Filtrado = ({ ordenamientoContinente, resetCountriesOrder, ordenAlfabetico, ordenPoblacional, getAllActivities, getOneActivitie }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(() => getAllActivities())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const touristActivities = useSelector((state) => state.touristActivities);
    const [state, setState] = useState({
        continente: '',
        actividadTuristica: '',
        order: '',
        poblacion: ''
    });

    useEffect(() => {
        resetCountriesOrder();
        if (state.continente.length > 2) ordenamientoContinente(state.continente);
        if (state.order.length > 2) ordenAlfabetico(state.order);
        if (state.poblacion.length > 2) ordenPoblacional(state.poblacion);
        if (state.actividadTuristica.length > 2) getOneActivitie(state.actividadTuristica)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state])

    const result = [].concat.apply([], touristActivities.map(element => { return element.nombre }));
    const activitiesForRender = result.filter((element, index) => {
        return result.indexOf(element) === index;
    })
    let i = 0;
    return (
        <div>
            <form className={style.container}>
                <label htmlFor='asc/desc'>
                    <select className={style.selector} value={state.order} onChange={(e) => setState({ ...state, order: e.target.value })}>
                        <option value={''}>Name</option>
                        <option value={''}>--------</option>
                        <option value='A-Z'>[A-Z]</option>
                        <option value='Z-A'>[Z-A]</option>
                    </select>
                </label>
                <label htmlFor='poblacion'>
                    <select className={style.selector} value={state.poblacion} onChange={(e) => setState({ ...state, poblacion: e.target.value })}>
                        <option value={''}>Poblacion</option>
                        <option value={''}>--------</option>
                        <option value='max'>Higher</option>
                        <option value='min'>Lower</option>
                    </select>
                </label>
                <label htmlFor='continente'>
                    <select className={style.selector} value={state.continente} onChange={(e) => setState({ ...state, continente: e.target.value })}>
                        <option value={''}>Continente</option>
                        <option value={''}>--------</option>
                        <option value="Africa">Africa</option>
                        <option value="South America">South America</option>
                        <option value="North America">North America</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                        <option value="Antarctica">Antarctica</option>
                    </select>
                </label>
                <label htmlFor='actividadTuristica'>
                    <select className={style.selector} value={state.actividadTuristica} onChange={(e) => setState({ ...state, actividadTuristica: e.target.value })}>
                        <option value={''}>Actividad Turistica</option>
                        <option value={''}>--------</option>
                        {activitiesForRender.map(element => (
                            <option key={i++} value={element}>{element}</option>
                        ))}
                    </select>
                </label>
            </form>
        </div>
    )

}
export default connect(null, { ordenamientoContinente, resetCountriesOrder, ordenAlfabetico, ordenPoblacional, getAllActivities, getOneActivitie })(Filtrado);