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
    START_EDIT_PRODUCT,
    PRODUCT_EDITED_SUCCESS,
    PRODUCT_EDITED_ERROR
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

// select and delete product
export function deleteProductAction(id) {
    return async (dispatch) => {
        dispatch(getDeletedProduct(id));

        try {
            await axiosClient.delete(`/products/${id}`);
            dispatch( deleteProductSuccess() );

            // if is deleted, show alert
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )

        } catch (error) {
            console.log(error);
            dispatch( deleteProductError() );
        }
    }
}

const getDeletedProduct = id => ({
    type: GET_PRODUCT_DELETE,
    payload: id
});

const deleteProductSuccess = () => ({
    type: PRODUCT_DELETED_SUCCESS
});

const deleteProductError = () => ({
    type: PRODUCT_DELETED_ERROR,
    payload: true
});

// put product to edit
export function getEditProduct(product) {
    return (dispatch) => {
        dispatch( obtainProductAction(product))
    }
}

const obtainProductAction = product => ({
    type: GET_EDIT_PRODUCT,
    payload: product
});

// edit a registration in API and state
export function editProductAction(product) {
    return async (dispatch) => {
        dispatch( editProduct() );
        try {
            await axiosClient.put(`/products/${product.id}`, product)
            dispatch(editProductSuccess(product))
        } catch (error) {
            console.log(error);
            dispatch(editProductError());
        }
    }
}

const editProduct = () => ({
    type: START_EDIT_PRODUCT
});

const editProductSuccess = product => ({
    type: PRODUCT_EDITED_SUCCESS,
    payload: product
});

const editProductError = () => ({
    type: PRODUCT_EDITED_ERROR,
    payload: true
})