import axios from "axios";

export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
export const RESET_COUNTRIES = 'RESET_COUNTRIES';

export const getAllCountries = () => {
    return async function (dispatch) {
        const response = (await axios.get('http://localhost:3001/countries')).data;
        return dispatch({ type: GET_ALL_COUNTRIES, payload: response })
    }
}

export const resetCountries = () => {
    return { type: RESET_COUNTRIES, payload: [] }
}

