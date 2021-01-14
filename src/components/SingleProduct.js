import React from 'react';
import {useHistory} from 'react-router-dom';
import Swal from 'sweetalert2';
// Redux
import {useDispatch} from 'react-redux';
import {deleteProductAction, getEditProduct} from '../actions/productActions';
import PropTypes from 'prop-types';

const SingleProduct = ({product}) => {
    const {name, price, id} = product;

    const dispatch = useDispatch();
    const history = useHistory();

    // confirm delete
    const confirmDeleteProduct = id => {
        // asking the user
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                // send to action
                dispatch(deleteProductAction(id));
            }
          })
        
    }
    // programmed redirect
    const redirectEdit = product => {
        dispatch( getEditProduct(product));
        history.push(`/products/edit/${product.id}`)
    }
    return (
       <tr>
           <td>{name}</td>
           <td><span className="font-weight-bold">$</span> {price}</td>
           <td className="actions">
               <button 
               type="button"
               onClick={ () => redirectEdit(product)}
               className="btn btn-primary mr-2">
                   Edit</button>
               <button
                type="button"
                className="btn btn-danger"
                onClick={ () => confirmDeleteProduct(id) }
               >Delete</button>
           </td>
       </tr>
    )
}

SingleProduct.propTypes = {
    product: PropTypes.object.isRequired
}

export default SingleProduct
