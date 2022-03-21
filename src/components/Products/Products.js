import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css' ;

const Products = ({setCartCount}) => {
    const [products , setproducts] = useState([]) 
    useEffect (()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=> setproducts(data))
    } ,[])
    return (
        <div className='products container'>
           {
               products.map (product => <Product 
                setCartCount = {setCartCount}
                key = {product.id} product={product}
                 ></Product>)
           }
        </div>
    );
};

export default Products;