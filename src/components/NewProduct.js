import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

// Redux actions 
import { creatingNewProductsAction } from '../actions/productActions';


// history from react-router-dom
const NewProduct = ({history}) => {
    // state of component 
    const [ name, setName ] = useState('');
    const [ price, setPrice ] = useState(0);

    // use useDispatch and create an oter function
    const dispatch = useDispatch();

    // get the store state
    const loading = useSelector(state => state.products.loading);
    const error = useSelector(state => state.products.error)

    // call the action from productActions
    const addProduct = product => dispatch( creatingNewProductsAction(product) )

    const submitNewProduct = e => {
        e.preventDefault();
    
        // validate form
        if( name.trim() === '' || price <= 0 ) {
            return;
        }
        // check for errors
    
        // create new product
        addProduct({
            name, 
            price
        });

        // redirect to home
        history.push('/');
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card-body">
                    <h2 className="text-center mb-4 font-weight-bold">
                        Add New Product
                    </h2>
                    <form onSubmit={submitNewProduct}>
                        <div className="form-group">
                            <label>Product Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Add Product Name"
                                name="name"
                                value={name}
                                onChange={e => setName(e.target.value)}
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
                                onChange={e => setPrice(Number(e.target.value))}
                            />
                        </div>
                        <button type="submit" 
                            className="btn btn-primary font-weight-bold text-uppercase d-block w-100">
                                Add Product</button>
                    </form>
                    { loading ? <p>Loading...</p> : null }
                    { error ? <p className="alert alert-danger p2 mt-4 text-center">Error was found</p> : null }
                </div>
            </div>
        </div>
    )
}

export default NewProduct;