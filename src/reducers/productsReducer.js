// each reducer has his own state
import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    START_DOWNLOAD_PRODUCT,
    PRODUCT_DOWNLOAD_SUCCEED,
    PRODUCT_DOWNLOAD_ERROR
} from '../types';

const initialState = {
    products: [],
    error: null,
    loading: false
}

export default function(state= initialState, action) {
    switch(action.type) {
        case START_DOWNLOAD_PRODUCT:
        case ADD_PRODUCT:
            return {
                ...state,
                loading: action.payload
            }
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                products: [...state.products, action.payload]
            }
        case ADD_PRODUCT_ERROR:
        case PRODUCT_DOWNLOAD_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case PRODUCT_DOWNLOAD_SUCCEED:
            return {
                ...state,
                loading: false,
                error: null,
                products: action.payload
            }
        default:
            return state;
    }
}

