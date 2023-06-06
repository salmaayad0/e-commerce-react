import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { detailsProduct } from "../redux/slices/productSlice";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../redux/slices/cartCount";

function CardProduct(props) {
  const { id, title, category, image, description, price } = props.product;

  //detais button 
  const dispatch = useDispatch();
  const detailsHandling = () => {
    dispatch(detailsProduct(id));
  };

  //cart count part
  const { cartCount } = useSelector((state) => state.cart);
  const dispatchCart = useDispatch();

  const add = () => {
    dispatchCart(addToCart());
  };

  const remove = () => {
    dispatchCart(removeFromCart());
  };

  return (
    <div className="col-12 col-md-6 col-lg-4 my-3">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={image}
          style={{
            height: "200px",
            width: "200px",
            objectFit: "contain",
            display: "block",
            margin: "auto",
          }}
        />
        <Card.Body>
          <Card.Title
            className="text-center"
            style={{ height: "25px", overflow: "hidden" }}
          >
            {title}
          </Card.Title>

          <Card.Text
            className="text-center"
            style={{ height: "85px", overflow: "hidden" }}
          >
            <p className="text-start text-decoration-none" >
              <b>{category} Section</b>
            </p>

            <p>{description}</p>
          </Card.Text>

          <Link
            to={`/shop/${id}`}
            onClick={(id) => detailsHandling(id)}
            style={{ width: "100%" }}
            className="btn btn-light text-center my-1"
          >
            Details
          </Link>

          <Button
            variant="dark"
            onClick={add}
            style={{ width: "100%" }}
          >
            {price} $
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

        </Card.Body>
      </Card>
    </div>
  );
}

export default CardProduct;
