import React from "react";
import { Link } from "react-router-dom";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useSelector } from "react-redux";

export default function Navbar() {
  const { cartCount } = useSelector((state) => state.cart);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light position-fixed fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
            LOGO
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/"}>
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/shop"}>
                  Store
                </Link>
              </li>

              <li className="nav-item">
              {cartCount > 0 ? (
            <>
              <Link className="nav-link active" aria-current="page" to={"ordernow"}>
                  <BsFillCartPlusFill /> {" "} {cartCount}
                </Link>
            </> 
          ) : (
            <>
              <Link className="nav-link active" aria-current="page" to={"emptyCart"}>
                  <BsFillCartPlusFill /> {" "} {cartCount}
                </Link>
            </> 
          )}
                
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
