import React from 'react'

export default function ShopNow() {
  return (
    <>
    <section className="container-fluid my-5">
    <div className="row">
      <h2 className='text-center my-2'>Select Your Special Offers</h2>
    </div>
    <div className="row d-flex justify-content-between mx-2">
      <div className="col-12 col-md-6 col-lg-3 img-custom m-3">
        <img
          src="media/4.webp"
          alt=""
          className="w-100 h-100 object-fit-cover"
        />
        <div className="text-img-custom text-center">
          <h2>Special Offers</h2>
        </div>
      </div>

      <div className="col-12 col-md-6 col-lg-3 img-custom m-3">
        <img
          src="media/6.jpg"
          alt=""
          className="w-100 h-100 object-fit-cover"
        />
        <div className="text-img-custom text-center">
          <h2>Special Offers</h2>
        </div>
      </div>

      <div className="col-12 col-md-6 col-lg-3 img-custom m-3">
        <img
          src="media/5.webp"
          alt=""
          className="w-100 h-100 object-fit-cover"
        />
        <div className="text-img-custom text-center">
          <h2>Special Offers</h2>
        </div>
      </div>

    </div>
  </section>
  </>
  )
}
