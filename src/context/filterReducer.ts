import {
    FILTER_BY_FAST_DELIVERY,
    FILTER_BY_PRICE,
    FILTER_BY_RATING, FILTER_BY_SEARCH,
    FILTER_BY_STOCK,
    RESET_FILTERS
} from "./type.ts";

const filterReducer = (state: any, action: any) => {
    switch (action.type) {
        case FILTER_BY_PRICE:
            return {
                ...state,
                sort: action.payload
            };
        case FILTER_BY_STOCK:
            return {
                ...state,
                byStock: !state.byStock
            };
        case FILTER_BY_FAST_DELIVERY:
            return {
                ...state,
                byFastDelivery: !state.byFastDelivery
            };
        case FILTER_BY_RATING:
            return {
                ...state,
                byRating: action.payload
            };

        case FILTER_BY_SEARCH:
            return {
                ...state,
                searchQuery: action.payload
            };

        case RESET_FILTERS:
            return {
                sort: "",
                byStock: false,
                byFastDelivery: false,
                byRating: 0,
                searchQuery: "",
            };
        default:
            return state;
    }
}

export default filterReducer;
