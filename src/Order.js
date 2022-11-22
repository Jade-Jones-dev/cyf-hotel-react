import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = props => {
  const [orders, setOrders] = useState(0);
  function orderOne() {
    setOrders(orders => {
      return orders + 1;
    });
  }
  return (
    <li className="orderList">
      {props.orderType}: {orders}
      <RestaurantButton orderButton={orderOne} />
    </li>
  );
};

export default Order;
