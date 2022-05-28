import { GET_ALL_COUNTRIES, RESET_COUNTRIES, SEARCH_BY_NAME, SEARCH_BACK } from "../actions"

const initialState = {
    countries: [],
    countriesCopy: []
}

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                countries: payload,
                countriesCopy: payload
            }
        case SEARCH_BY_NAME:
            return {
                ...state,
                countries: state.countries.filter(pais => pais.name.toLowerCase().includes(payload.toLowerCase()))
            }
        case SEARCH_BACK:
            return {
                ...state,
                countries: state.countriesCopy.filter(pais => pais.name.toLowerCase().includes(payload.toLowerCase()))
            }
        case RESET_COUNTRIES:
            return {
                ...state,
                countries: payload
            }
        default:
            return state;
    }
}

export default rootReducer;