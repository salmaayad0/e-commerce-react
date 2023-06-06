import React from 'react'

export default function NotFound() {
  return (
    <>
    <div className="container-fluid " style={{ height: "100vh", width: "100vw", marginTop: "70px" }}>
      <p className="d-flex justify-content-center align-items-center text-danger">
        No such a page, please enter a valid url 
      </p>
    </div>
  </>
  )
}