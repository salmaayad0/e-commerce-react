import React from 'react'
import CardProduct from '../componets/CardProduct'
import { useSelector } from 'react-redux';

export default function Shop() {
    const { products, loading, error } = useSelector(
        (state) => state.productSlice
      );
    
  return (
    <>
      {error && !loading ? (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      ) : (
        ""
      )}
      
      {loading ? (
        <div className="d-flex justify-content-center align-items-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="container" style={{ marginTop: "70px" }}>
          <div className="row">
            {products.map((product) => (
                <CardProduct key={product.id} product={product}/>
            ))}
          </div>
        </div>
      )}
    </>
    
  )
}
