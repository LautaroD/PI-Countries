import React, { useState, useEffect } from 'react'
import { connect, useSelector } from 'react-redux';
import { searchByName, searchBack, searchBackForm, searchByNameForm } from '../../redux/actions';
import style from './assets/SearchBar.module.css'

export const SearchBar = ({ searchByName, searchBack, isInForm, dataFromForm, searchBackForm, searchByNameForm }) => {
    const [state, setState] = useState('');
    const [previousState, setPreviousState] = useState('');

    const listCountries = useSelector((state) => (state.countryNames))

    useEffect(() => {
        if (isInForm) {
            if (previousState.length > state.length) {
                searchBackForm(state);
            }
            else { searchByNameForm(state) }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state])

    useEffect(() => {
        if (isInForm) {
            return
        }
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
                </button>
            </form>
        </div >
    )
}

export default connect(null, { searchByName, searchBack, searchBackForm, searchByNameForm })(SearchBar)