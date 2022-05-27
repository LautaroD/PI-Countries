import { GET_ALL_COUNTRIES, RESET_COUNTRIES, GET_COUNTRIES_BY_NAME } from "../actions"

const initialState = {
    countries: [],
}

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                countries: state.countries.concat(payload)
            }
        case GET_COUNTRIES_BY_NAME:
            return {
                ...state,
                countries: payload
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