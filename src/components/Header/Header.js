import React from 'react';
import './Header.css' ;


const Header = ({count}) => {
    return (
        <div>
            <div className='container'>
           <div className="row">
               <div className="col-md-2">
               <h2 className=''>Logo</h2>
               </div>
               <div className="col-md-10  d-flex justify-content-end">
               <li className='items me-4 p-2'>Home</li>
           <li className='items me-4 p-2'>Contuct</li>
           <li className='items me-4 p-2'>Cart <sup>{count}</sup></li>
           <li className='items me-4 p-2'>Products</li> 
               </div>
           </div>
        </div>
        </div>
    );
};

export default Header;