import React from 'react'

import './style.css'

import Product from './Product'


function Main(props) {

    const { products , onAdd } = props;
    


    return (
       <main className ="block col-2">

       <h2> Products </h2>
       
       <div className="align">
             
       {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd} ></Product>
        ))}
           
           
       </div>



       </main>
    )
}

export default Main
