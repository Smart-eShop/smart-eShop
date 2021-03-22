import React from 'react'
import ProductsCategories from '../Category/ProductsCategories';
import Footer from '../Footer/Footer';

function ProductsCategory() {
    return (
        <div
        // style={{
        //   display: 'flex',
        //   justifyContent: 'center',
        //   alignItems: 'center',
        //   height: '90vh'
        // }}
      >
        <h1>Prekių kategorijos</h1>
        <ProductsCategories/>
        <Footer/>
      </div>
    )
}

export default ProductsCategory
