import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { detailProducts } from "../actions/productActions";
import LoadingBox from "../components/LoadingBox";
import MessagBox from "../components/MessagBox";
import RatingC from "../components/Rating";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ProductScreen() {
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.prodcutDetails);
  const { loading, error, product } = productDetails;
  const { id } = useParams();
  const history = useNavigate();
  const [qty, setQty] = useState(1);
  console.log(productDetails);

  useEffect(() => {
    dispatch(detailProducts(id));
  }, [dispatch, id]);
  const addToCartHandler = () => {
    history(`/cart/${id}?qty=${qty}`);
  };
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessagBox varient="danger">{error}</MessagBox>
      ) : (
        <div className="row top">
          <Link to="/">Back to Main</Link>
          <div className="col-2">
            <img className="large" src={product.images} alt={product.name} />
          </div>
          <div className="col-1">
            <ul>
              <li>
                <h1>{product.name}</h1>
              </li>
              <li>
                <RatingC
                  Rating={product.rating}
                  numReviews={product.numReviews}
                ></RatingC>
              </li>
              <li>Price: ${product.price}</li>
              <li>
                Description: <p>{product.description}</p>
              </li>
            </ul>
          </div>
          <div className="col-1">
            <div className="card card-body">
              <ul>
                <li>
                  <div className="row">
                    <div>Price</div>
                    <div className="price">${product.price}</div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div>Status</div>
                    <div>
                      {product.countInStock > 0 ? (
                        <span className="sucsses">In Stock</span>
                      ) : (
                        <span className="error">Out of Stock</span>
                      )}
                    </div>
                  </div>
                </li>
                {product.countInStock > 0 && (
                  <>
                    <li>
                      <div className="row">
                        <div>Qty</div>
                        <div>
                          <select
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                            id=""
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </select>
                        </div>
                      </div>
                    </li>
                    <li>
                      <button
                        onClick={addToCartHandler}
                        className="primary block"
                      >
                        Add to Cart
                      </button>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductScreen;
