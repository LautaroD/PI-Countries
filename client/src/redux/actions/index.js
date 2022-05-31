import axios from "axios";

export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
export const RESET_COUNTRIES = 'RESET_COUNTRIES';
export const SEARCH_BY_NAME = 'SEARCH_BY_NAME';
export const SEARCH_BACK = 'SEARCH_BACK';
export const GET_ONE_COUNTRY = 'GET_ONE_COUNTRY';
export const UPDATE_COUNTRIES = 'UPDATE_COUNTRIES';
export const SEARCH_BY_NAME_FORM = 'SEARCH_BY_NAME_FORM';
export const CONTINENT_FILTER = 'FILTER_ORDER';
export const RESET_COUNTRIES_ORDER = 'RESET_COUNTRIES_ORDER';
export const ALPHABETIC_ORDER = 'ALPHABETIC_ORDER';
export const POBLATION_ORDER = 'POBLATION_ORDER';
export const GET_ALL_ACTIVITIES = 'GET_ALL_ACTIVITIES';
export const GET_ONE_ACTIVITIE = 'GET_ONE_ACTIVITIE';
export const SEARCH_BACK_FORM = 'SEARCH_BACK_FORM';
export const UPDATE_COUNTRIES_FORM = 'UPDATE_COUNTRIES_FORM';

export const getAllCountries = () => {
    return async function (dispatch) {
        const response = (await axios.get('http://localhost:3001/countries')).data;
        return dispatch({ type: GET_ALL_COUNTRIES, payload: response })
    }
}

export const getAllActivities = () => {
    return async function (dispatch) {
        const response = (await axios.get('http://localhost:3001/activities')).data;
        return dispatch({ type: GET_ALL_ACTIVITIES, payload: response })
    }
}

export const getOneCountry = (name) => {
    return async function (dispatch) {
        const response = (await axios.get(`http://localhost:3001/countries?name=${name}`)).data;
        return dispatch({ type: GET_ONE_COUNTRY, payload: response })
    }
}
export const getOneActivitie = (name) => {
    return async function (dispatch) {
        const response = (await axios.get(`http://localhost:3001/getActivitiesByName?name=${name}`)).data;
        return dispatch({ type: GET_ONE_ACTIVITIE, payload: response })
    }
}

export const updateCountries = (data) => {
    return { type: UPDATE_COUNTRIES, payload: data }
}

export const resetCountriesOrder = (data) => {
    return { type: RESET_COUNTRIES_ORDER, payload: data }
}

export const resetCountries = (data) => {
    return { type: RESET_COUNTRIES, payload: data }
}
//=========================================================================//
// =========== Acciones solo disponibles para el search general =========== //
export const searchByName = (data) => {
    return { type: SEARCH_BY_NAME, payload: data }
}

export const searchBack = (data) => {
    return { type: SEARCH_BACK, payload: data }
}
//=========================================================================//
// ======= Acciones solo disponibles para el search del formulario ======= //
export const searchByNameForm = (data) => {
    return { type: SEARCH_BY_NAME_FORM, payload: data }
}

export const searchBackForm = (data) => {
    return { type: SEARCH_BACK_FORM, payload: data }
}

export const updateCountriesForm = () => {
    return { type: UPDATE_COUNTRIES_FORM, payload: null }
}
//=========================================================================//

export const ordenamientoContinente = (data) => {
    return { type: CONTINENT_FILTER, payload: data }
}

export const ordenAlfabetico = (data) => {
    return { type: ALPHABETIC_ORDER, payload: data }
}

export const ordenPoblacional = (data) => {
    return { type: POBLATION_ORDER, payload: data }
}




