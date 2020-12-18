import React from 'react';
import {Link} from 'react-router-dom';

const SingleProduct = ({product}) => {
    const {name, price, id} = product;
    return (
       <tr>
           <td>{name}</td>
           <td><span className="font-weight-bold">$</span> {price}</td>
           <td className="actions">
               <Link to={`/products/edit/${id}`} className="btn btn-primary mr-2">Edit</Link>
               <button
                type="button"
                className="btn btn-danger"
               >Delete</button>
           </td>
       </tr>
    )
}

export default SingleProduct
