import React, { useState, useEffect } from 'react';
import { ordenamientoContinente, resetCountriesOrder, ordenAlfabetico, ordenPoblacional, getAllActivities, getOneActivitie } from '../../redux/actions'
import { connect, useSelector, useDispatch } from 'react-redux';

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

    return (
        <div>Filtrado
            <form>
                <label htmlFor='asc/desc'>
                    <select value={state.order} onChange={(e) => setState({ ...state, order: e.target.value })}>
                        <option value={''}>Name</option>
                        <option value={''}>--------</option>
                        <option value='A-Z'>[A-Z]</option>
                        <option value='Z-A'>[Z-A]</option>
                    </select>
                </label>
                <label htmlFor='poblacion'>
                    <select value={state.poblacion} onChange={(e) => setState({ ...state, poblacion: e.target.value })}>
                        <option value={''}>Poblacion</option>
                        <option value={''}>--------</option>
                        <option value='max'>Max</option>
                        <option value='min'>Min</option>
                    </select>
                </label>
                <label htmlFor='continente'>
                    <select value={state.continente} onChange={(e) => setState({ ...state, continente: e.target.value })}>
                        <option value={''}>Continente</option>
                        <option value={''}>--------</option>
                        <option value="Africa">Africa</option>
                        <option value="South America">South America</option>
                        <option value="North America">North America</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                </label>
                <label htmlFor='actividadTuristica'>
                    <select value={state.actividadTuristica} onChange={(e) => setState({ ...state, actividadTuristica: e.target.value })}>
                        <option value={''}>Actividad Turistica</option>
                        <option value={''}>--------</option>
                        {touristActivities.map(e => (
                            <option key={e.id} value={e.nombre}>{e.nombre}</option>
                        ))}
                    </select>
                </label>
            </form>
        </div>
    )

}
export default connect(null, { ordenamientoContinente, resetCountriesOrder, ordenAlfabetico, ordenPoblacional, getAllActivities, getOneActivitie })(Filtrado);