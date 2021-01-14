import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {editProductAction} from '../actions/productActions';
import {useHistory} from 'react-router-dom';

 const EditProduct = () => {
     const history = useHistory();
     const dispatch = useDispatch();

     // new state of product
     const [product, setProduct] = useState({
         name: '',
         price: ''
     })
     const productForEdit = useSelector(state => state.products.editproduct);
     const {name, price} = product;
     
     // fill the state
     useEffect(() => {
        setProduct(productForEdit)
     }, [productForEdit]);

     // read form data
     const onChangeFormulario = e => {
        setProduct({
            ...product,
            [e.target.name] : e.target.value
        })
     }

     const submitEditProduct = e => {
         e.preventDefault();
         dispatch(editProductAction(product)) 
        // after edit go to homepage
         history.push('/')
     }
   
 
     return (
        <div className="row justify-content-center">
        <div className="col-md-8">
            <div className="card-body">
                <h2 className="text-center mb-4 font-weight-bold">
                    Edit Product
                </h2>
                <form
                    onSubmit={submitEditProduct}
                >
                    <div className="form-group">
                        <label>Product Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Add Product Name"
                            name="name"
                            value={name}
                            onChange={onChangeFormulario}
                        />
                    </div>
                    <div className="form-group">
                        <label>Product Price</label>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Add Product Price"
                            name="price"
                            value={price}
                            onChange={onChangeFormulario}
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="btn btn-primary font-weight-bold text-uppercase d-block w-100">
                            Save Changes</button>
                </form>
            </div>
        </div>
    </div>
     )
 }

 export default EditProduct;