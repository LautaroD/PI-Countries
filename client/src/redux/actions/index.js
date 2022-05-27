import axios from "axios";

export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
export const GET_COUNTRIES_BY_NAME = 'GET_COUNTRIES_BY_NAME'
export const RESET_COUNTRIES = 'RESET_COUNTRIES';

export const getAllCountries = () => {
    return async function (dispatch) {
        const response = (await axios.get('http://localhost:3001/countries')).data;
        return dispatch({ type: GET_ALL_COUNTRIES, payload: response })
    }
}

export function getCountriesByName(data) {
    return async function (dispatch) {
        const response = (await axios.get(`http://localhost:3001/countries?name=${data}`)).data;
        return dispatch({ type: GET_COUNTRIES_BY_NAME, payload: response })
    }
}

// export const getCountriesByName = (data) => {
//     return async function (dispatch) {
//         const response = (await axios.get(`http://localhost:3001/countries?name=${data}`)).data;
//         return dispatch({ type: GET_COUNTRIES_BY_NAME, payload: response })
//     }
// }

export const resetCountries = () => {
    return { type: RESET_COUNTRIES, payload: [] }
}

