import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR
} from '../types';

// creating new products
export function creatingNewProductsAction(product) {
    return () => {
        console.log(product);
    }
}