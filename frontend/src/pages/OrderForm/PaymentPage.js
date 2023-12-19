import React, { useState, useEffect } from "react";
import classes from "./paymentform.module.css";
import { getNewOrderForCurrentUser } from "../../services/orderService";
import Title from "../../components/Title/Title";
import QRimage from "./QR.png";
import OrderItemsList from "../../components/OrderItemsList/OrderItemsList";
import Map from "../../components/Map/Map";
import { Link } from "react-router-dom";
import GoBackPage from "../GoBackPage";

export default function PaymentPage() {
  const [order, setOrder] = useState();

  useEffect(() => {
    getNewOrderForCurrentUser().then((data) => setOrder(data));
  }, []);

  if (!order) return null; // Consider adding a loader or placeholder for the order fetching state

  return (
    <>
      <div className={classes.container}>
        <div className={classes.content}>
          <Title title="Order Form" fontSize="1.6rem" />
          <div className={classes.summary}>
            <div>
              <h3>Name:</h3>
              <span>{order.name}</span>
            </div>
            <div>
              <h3>Address:</h3>
              <span>{order.address}</span>
            </div>
          </div>
          <OrderItemsList order={order} />
        </div>

        <div className={classes.map}>
          <Title title="Your Location" fontSize="1.6rem" />
          <Map readonly={true} location={order.addressLatLng} />
        </div>

        <div className={classes.buttons_container}>
          <div className={classes.buttons}>
            <Link to="/orders">
              <button className={classes.viewOrderButton}>View Order</button>
            </Link>
            <GoBackPage />
          </div>

          <div className={classes.qrCode}>
            <img src={QRimage} alt="QR Code" />
            <p>Scan with pay</p>
          </div>
        </div>
      </div>
    </>
  );
}
