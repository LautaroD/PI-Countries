import React, { useState } from 'react'
import { connect } from 'react-redux';
import { getCountriesByName, resetCountries } from '../../redux/actions';

export const SearchBar = ({ getCountriesByName }) => {
    // const paises = useSelector((state) => state.countries)
    // const dispatch = useDispatch();
    const [state, setState] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        getCountriesByName(state);
    }

    // const onchange = (e) => {
    //     e.preventDefault();
    //     setState(e.target.value)
    //     getCountriesByName(state);
    // }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder='Buscar...'
                    type="text"
                    name="name"
                    id="name"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                // onChange={(e) => onchange(e)}
                />
                <button type="submit">X</button>
            </form>
        </div>
    )
}

export default connect(null, { getCountriesByName, resetCountries })(SearchBar)