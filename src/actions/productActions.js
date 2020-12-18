import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    START_DOWNLOAD_PRODUCT,
    PRODUCT_DOWNLOAD_SUCCEED,
    PRODUCT_DOWNLOAD_ERROR
} from '../types';
import axiosClient from '../config/axios';
import Swal from 'sweetalert2'



// creating new products
export function creatingNewProductsAction(product) {
    return async (dispatch) => {
        dispatch(addProduct() );
        try {
            // insert to API 
            await axiosClient.post('/products', product);

            // if everthing ok, the state is updated
            dispatch( addProductSuccess(product));

            // alert
            Swal.fire(
                'Good!',
                'Added successfully!',
                'success'
            )

        } catch (error) {
            console.log(error);
            dispatch( addProductError(true) );

            // error alert
            Swal.fire({
                icon: 'error',
                title: 'Error was found',
                text: 'Try Again!'
            })
        }
    }
}

const addProduct = () => ({
    type: ADD_PRODUCT, 
    payload: true
});

// if the product arrives to database
const addProductSuccess = product => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: product
});

// if was an error
const addProductError = state => ({
    type: ADD_PRODUCT_ERROR,
    payload: state
});

// download products from database
export function getProductAction() {
    return async dispatch => {
        dispatch( downloadProducts() );
        try {
            const response = await axiosClient.get('/products');
            dispatch( productDownloadSucceeded(response.data) );
            
        } catch (error) {
            console.log(error);
            dispatch( productDownloadError() )
        }
    }
} 

const downloadProducts = () => ({
    type: START_DOWNLOAD_PRODUCT,
    payload: true
});

const productDownloadSucceeded = products => ({
    type: PRODUCT_DOWNLOAD_SUCCEED,
    payload: products
});

const productDownloadError = () => ({
    type: PRODUCT_DOWNLOAD_ERROR,
    payload: true
});