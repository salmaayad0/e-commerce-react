import React from 'react'

export default function SectionNew() {
  return (
    <>
    <section className="container-fluid my-3">
      <div className="row d-flex">
        <div className="col-12 col-md-6 w-100">
          <img
            src="media/2.jpg"
            alt=""
            className="w-100 h-100 object-fit-contain"
          />
        </div>
        <div className="col-12 col-md-6 w-100 text-center h-25">
          <p style={{fontSize: "24px"}}>Select Your speacial offer <strong>NOW</strong></p>
        </div>
        <div className="col-12 col-md-6 w-100">
          <img
            src="media/3.jpg"
            alt=""
            className="w-100 h-100 object-fit-cover"
          />
        </div>
      </div>
    </section>
    </>
  )
}
