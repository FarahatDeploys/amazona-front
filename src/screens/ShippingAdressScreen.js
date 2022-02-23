import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveShippingAdress } from "../actions/cartActrions";
import CheckoutSteps from "../components/CheckoutSteps";
function ShippingAdressScreen() {
  const userSignin = useSelector((state) => state.userSignIn);
  const { userInfo } = userSignin;
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const history = useNavigate();
  const [fullName, setFullName] = useState(shippingAddress.fullName);
  const [address, setAddresss] = useState(shippingAddress.adress);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const disptach = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    disptach(
      saveShippingAdress({ fullName, address, city, postalCode, country })
    );
    history("/payment");
  };
  useEffect(() => {
    if (!userInfo) {
      history("/signin");
    }
  });

  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <form className="form" onSubmit={submitHandler} action="">
        <div>
          <h1>Shipping Adress</h1>
        </div>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            placeholder="Enter full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="fullName">Adress</label>
          <input
            type="text"
            id="Adress"
            placeholder="Enter Your Adress"
            value={address}
            onChange={(e) => setAddresss(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>{" "}
        <div>
          <label htmlFor="postalCode">Postal Code</label>
          <input
            type="text"
            id="postalCode"
            placeholder="Enter Your PostalCode"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            placeholder="Enter Your Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="">
            <button className="primary" type="submit">
              Continue
            </button>
          </label>
        </div>
      </form>
    </div>
  );
}

export default ShippingAdressScreen;
