import React from 'react'
import CardProduct from './CardProduct'


export default function CategoryShop(props) {
  const category = props.category

  return (
    <>
     <div className="container" style={{ marginTop: "70px" }}>
          <div className="row">
            {category.map((product) => (
                <CardProduct key={product.id} product={product}/>
            ))}
          </div>
        </div>
    </>
    
  )
}
