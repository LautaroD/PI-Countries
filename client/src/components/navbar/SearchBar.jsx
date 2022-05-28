import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { searchByName, resetCountries, getAllCountries, searchBack } from '../../redux/actions';
import style from './assets/SearchBar.module.css'

export const SearchBar = ({ searchByName, resetCountries, getAllCountries, searchBack }) => {
    const [state, setState] = useState('');
    const [previousState, setPreviousState] = useState('');

    // useEffect(() => {
    //     if (previousState.length > state.length) {
    //         if (state.length < 1) {
    //             resetCountries();
    //             getAllCountries();
    //         }
    //         else { searchBack(state) }
    //     }
    //     else { searchByName(state) }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [state])

    useEffect(() => {
        if (previousState.length > state.length) {
            searchBack(state)
        }
        else { searchByName(state) }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state])


    const onchange = (e) => {
        e.preventDefault();
        setPreviousState(state);
        setState(e.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        setState('');
    }

    return (
        <div>
            <form className={style.form} onSubmit={handleSubmit}>
                <input
                    className={style.input}
                    placeholder='Buscar...'
                    type="text"
                    name="name"
                    id="name"
                    value={state}
                    onChange={(e) => onchange(e)}
                />
                <button className={style.reset} type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </form>
        </div>
    )
}

export default connect(null, { searchByName, resetCountries, getAllCountries, searchBack })(SearchBar)