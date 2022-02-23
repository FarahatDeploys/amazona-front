import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SigninScreen from "./screens/SigninScreen";
import { signOut } from "./actions/userActions";
import RegisterScreen from "./screens/RegisterScreen";
import ShippingAdressScreen from "./screens/ShippingAdressScreen";
import PaymentMethodsScreen from "./screens/PaymentMethods";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignIn);
  const { userInfo } = userSignin;
  const signOutHandler = () => {
    dispatch(signOut());
  };
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
              amazona
            </Link>
          </div>
          <div>
            <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <Link to="#signout" onClick={signOutHandler}>
                    Sign Out
                  </Link>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
          </div>
        </header>
        <main>
          <Routes>
            <Route
              path="/product/:id"
              element={<ProductScreen></ProductScreen>}
            ></Route>
            <Route
              path={"/cart/:id"}
              element={<CartScreen></CartScreen>}
            ></Route>
            <Route
              path="/signin"
              element={<SigninScreen></SigninScreen>}
            ></Route>
            <Route
              path="/register"
              element={<RegisterScreen></RegisterScreen>}
            ></Route>
            <Route path={"/cart"} element={<CartScreen></CartScreen>}></Route>
            <Route
              path="/shipping"
              element={<ShippingAdressScreen></ShippingAdressScreen>}
            ></Route>
            <Route
              path="/payment"
              element={<PaymentMethodsScreen></PaymentMethodsScreen>}
            ></Route>
            <Route
              path="/placeorder"
              element={<PlaceOrderScreen></PlaceOrderScreen>}
            ></Route>
            <Route path="/" element={<HomeScreen></HomeScreen>} exact></Route>
          </Routes>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
