import React from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from "../redux/slices/cartCount"

export default function Details() {
    const { item, loading, error } = useSelector((state) => state.productSlice);
    
    const { cartCount } = useSelector((state) => state.cart);

    const dispatch = useDispatch();
    const add = () => {
      dispatch(addToCart());
    };
  
    const remove = () => {
      dispatch(removeFromCart());
    };

  return (
    <> {error && !loading ? (
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
        <>
          <div className="container" 
          style={{
            width: "600px",
            margin: "0px 400px",
              }}>
            <div className="d-flex flex-column">
            <h2 className="text-center my-3">{item.title}</h2>
            <img
              src={item.image}
              alt=""
              style={{
                height: "200px",
                width: "200px",
                objectFit: "contain",
                display: "block",
                margin: "auto",
              }}
            />
            <p className='my-3'>{item.description}</p>

            <p className="text-center my-3"><b>{item.category}</b></p>

            <Button
            variant="dark"
            onClick={add}
            style={cartCount < 0 ? "" : { width: "100%" }}
          >
            {item.price} $
          </Button>
          {cartCount > 0 ? (
            <>
              <Button variant="danger" onClick={remove} style={{ width: "100%" }}>
                Remove
              </Button>{" "}
            </>
          ) : (
            ""
          )}
            </div>
          </div>
        </>
      )}

      </>
  )
}
