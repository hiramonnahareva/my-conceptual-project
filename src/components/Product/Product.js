import React from 'react';
import ReactModal from '../../ReactModal/ReactModal';
import './Product.css' ;

const Product = (props) => {
    // console.log (product)
    const {title ,image , price} = props.product ;
    return (
        <div className='product shadow rounded bg-light'>
            <img src={image} alt=''/>
            <h4>{title.slice (0 , 10)}</h4>
            <h4>{price}</h4>
            <button onClick={props.setCartCount} className='btn btn-primary me-4'>Cart</button>
            <button className='btn btn-danger me-4'>Delete</button>
             <ReactModal product={props.product}></ReactModal>
        </div>
    );
};

export default Product;