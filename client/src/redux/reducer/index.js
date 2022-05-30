import { GET_ALL_COUNTRIES, RESET_COUNTRIES, SEARCH_BY_NAME, SEARCH_BACK, GET_ONE_COUNTRY, UPDATE_COUNTRIES, SEARCH_BACK_FORM, SEARCH_BY_NAME_FORM } from "../actions"

const initialState = {
    countries: [],
    countriesCopy: [],
    country: [],
    countryNames: [],
    countryNamesCopy: []
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
                countryNames: state.countryNames.filter(pais => !payload.includes(pais))
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
        default:
            return state;
    }
}

export default rootReducer;