import React from "react";
import { Link } from "react-router-dom";

export default function EmptyCart() {
  return (
    <>
      <div
        className="container-fluid "
        style={{ height: "100vh", width: "100vw", marginTop: "70px" }}
      >
        <div className="d-flex justify-content-center align-items-center ">
          <p>Your cart is empty please select items first, go to &nbsp;</p>
          <p>
            <Link className="text-danger" aria-current="page" to={"/shop"}>
              <strong>Store</strong>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
