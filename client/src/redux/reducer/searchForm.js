import { SEARCH_BY_NAME_FORM, UPDATE_SEARCH_FORM } from "../actions"

const initialState = {
    searchContent: [],
    searchContentCopy: []
}

const reducerSearchForm = (state = initialState, { type, payload }) => {
    switch (type) {
        case UPDATE_SEARCH_FORM:
            return {
                ...state,
                searchContent: state.searchContent.filter(pais => pais.toLowerCase().includes(payload.toLowerCase()))
            }
        case SEARCH_BY_NAME_FORM:
            return {
                ...state,
                searchContent: state.searchContent.filter(pais => pais.toLowerCase().includes(payload.toLowerCase()))
            }
        default:
            return state;
    }
}

export default reducerSearchForm;

        // case SEARCH_BY_NAME_FORM:
        //     return {
        //         ...state,
        //         previousCountryNames: state.countryNames,
        //         countryNames: state.previousCountryNames.filter(pais => pais.toLowerCase().includes(payload.toLowerCase()))
        //     }