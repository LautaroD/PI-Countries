import axios from "axios";

export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
// export const GET_COUNTRIES_BY_NAME = 'GET_COUNTRIES_BY_NAME'
export const RESET_COUNTRIES = 'RESET_COUNTRIES';
export const SEARCH_BY_NAME = 'SEARCH_BY_NAME';
export const SEARCH_BACK = 'SEARCH_BACK';



export const getAllCountries = () => {
    return async function (dispatch) {
        const response = (await axios.get('http://localhost:3001/countries')).data;
        return dispatch({ type: GET_ALL_COUNTRIES, payload: response })
    }
}

export const searchByName = (data) => {
    return { type: SEARCH_BY_NAME, payload: data }
}

export const searchBack = (data) => {
    return { type: SEARCH_BACK, payload: data }
}

export const resetCountries = () => {
    return { type: RESET_COUNTRIES, payload: [] }
}

