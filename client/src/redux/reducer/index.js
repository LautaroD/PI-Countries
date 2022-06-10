import {
    GET_ALL_COUNTRIES, RESET_COUNTRIES, SEARCH_BY_NAME,
    SEARCH_BACK, GET_ONE_COUNTRY, UPDATE_COUNTRIES,
    CONTINENT_FILTER, RESET_COUNTRIES_ORDER, ALPHABETIC_ORDER,
    POBLATION_ORDER, GET_ALL_ACTIVITIES, GET_ONE_ACTIVITIE,
    SEARCH_BY_NAME_FORM, SEARCH_BACK_FORM, CLEAR_DETAIL_COUNTRY
} from "../actions"

const initialState = {
    countries: [],
    countriesCopy: [],
    country: [],
    countryNames: [],
    countryNamesCopy: [],
    touristActivities: []
}

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                countries: payload,
                countriesCopy: payload,
                countryNames: payload.map(e => e.name),
                countryNamesCopy: payload.map(e => e.name)
            }
        case SEARCH_BY_NAME:
            return {
                ...state,
                countries: state.countries.filter(pais => pais.name.toLowerCase().includes(payload.toLowerCase())) // Busca coincidir
            }
        case SEARCH_BACK:
            return {
                ...state,
                countries: state.countriesCopy.filter(pais => pais.name.toLowerCase().includes(payload.toLowerCase())) // Busca coincidir cuando se borra una letra
            }
        case SEARCH_BY_NAME_FORM:
            return {
                ...state,
                countryNames: state.countryNames.filter(pais => pais.toLowerCase().includes(payload.toLowerCase()))
            }
        case SEARCH_BACK_FORM:
            return {
                ...state,
                countryNames: state.countryNamesCopy.filter(pais => !payload.includes(pais))
            }
        case UPDATE_COUNTRIES:
            return {
                ...state,
                countryNames: state.countryNames.filter(pais => pais.toLowerCase() !== payload.toLowerCase()) // Elimina del array el name pasado
            }
        case RESET_COUNTRIES:
            return {
                ...state,
                countryNames: state.countryNamesCopy.filter(pais => !payload.includes(pais))
            }
        case GET_ONE_COUNTRY:
            return {
                ...state,
                country: payload
            }
        case RESET_COUNTRIES_ORDER:
            return {
                ...state,
                countries: state.countriesCopy.filter(pais => (pais))
            }
        case CONTINENT_FILTER:
            return {
                ...state,
                countries: state.countries.filter(pais => pais.continente === payload)
            }
        case ALPHABETIC_ORDER:
            return {
                ...state,
                countries: (payload === 'A-Z') ? state.countries.sort((a, b) => a.name.localeCompare(b.name))
                    : state.countries.sort((a, b) => a.name.localeCompare(b.name)).reverse()
            }
        case POBLATION_ORDER:
            return {
                ...state,
                countries: (payload === 'max') ? state.countries.sort((a, b) => b.poblacion - a.poblacion)
                    : state.countries.sort((a, b) => b.poblacion - a.poblacion).reverse()
            }
        case GET_ALL_ACTIVITIES:
            return {
                ...state,
                touristActivities: payload
            }
        case GET_ONE_ACTIVITIE:
            return {
                ...state,
                countries: ([].concat.apply([], (payload.map(element => { return element.countries })))).filter((element, index, array) => array.findIndex(t => t.id === element.id) === index)
            }
        case CLEAR_DETAIL_COUNTRY:
            return {
                ...state,
                country: []
            }
        default:
            return state;
    }
}

export default rootReducer;