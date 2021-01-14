// each reducer has his own state
import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    START_DOWNLOAD_PRODUCT,
    PRODUCT_DOWNLOAD_SUCCEED,
    PRODUCT_DOWNLOAD_ERROR,
    GET_PRODUCT_DELETE,
    PRODUCT_DELETED_SUCCESS,
    PRODUCT_DELETED_ERROR,
    GET_EDIT_PRODUCT,
    PRODUCT_EDITED_SUCCESS,
    PRODUCT_EDITED_ERROR
} from '../types';

const initialState = {
    products: [],
    error: null,
    loading: false,
    deleteproduct: null,
    editproduct: null
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
        case PRODUCT_DELETED_ERROR:
        case PRODUCT_EDITED_ERROR:
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
        case  GET_PRODUCT_DELETE:
            return {
                ...state,
                deleteproduct: action.payload
            }
        case PRODUCT_DELETED_SUCCESS:
            return {
                ...state,
                products: state.products.filter( product => product.id !== state.deleteproduct ),
                deleteproduct: null
            }
        case GET_EDIT_PRODUCT:
            return {
                ...state,
                editproduct: action.payload
            }
        case PRODUCT_EDITED_SUCCESS:
            return {
                ...state,
                editproduct: null,
                products: state.products.map(product => 
                        product.id === action.payload.id ? product = action.payload : product
                    )
            }
        default:
            return state;
    }
}

