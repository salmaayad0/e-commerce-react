import React from "react";

export default function Services() {
  return (
    <>
      <div class="container text-center my-5">
        <h3>NEW ARRIVAL</h3>
        <p>
          <em>Lorem, ipsum dolor.</em>
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <div class="row">
          <div class="col-sm-4">
            <p>
              <strong>Men's Clothes</strong>
            </p>
            <img
              src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
              alt=""
              style={{
                height: "255px",
                width: "255px",
                objectFit: "contain",
                display: "block",
                margin: "auto",
              }}
            />
          </div>
          <div class="col-sm-4">
            <p>
              <strong>Jewelery</strong>
            </p>
            <img
              src="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"
              alt=""
              style={{
                height: "255px",
                width: "255px",
                objectFit: "contain",
                display: "block",
                margin: "auto",
              }}
            />
          </div>
          <div class="col-sm-4">
            <p>
              <strong>Women's Clothe</strong>
            </p>
            <img
              src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"
              alt=""
              style={{
                height: "255px",
                width: "255px",
                objectFit: "contain",
                display: "block",
                margin: "auto",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
