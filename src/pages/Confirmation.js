import React from "react";
import { Link } from "react-router-dom";
import "../styles/Confirmation.css";

function Confirmation() {
  // Simulez des données (vous pouvez remplacer par des props ou des données de contexte si nécessaires)
  const orderDetails = {
    orderId: "123456",
    items: [
      { name: "Margherita Pizza", quantity: 2 },
      { name: "Pepperoni Pizza", quantity: 1 },
      { name: "Garlic Bread", quantity: 3 },
    ],
    totalPrice: 45.99,
  };

  return (
    <div className="confirmation">
      <div className="confirmationContainer">
        <h1>Thank You for Your Order!</h1>
        <p>Your order has been successfully placed.</p>
        <div className="orderDetails">
          <h2>Order Details</h2>
          <p><strong>Order ID:</strong> {orderDetails.orderId}</p>
          <ul>
            {orderDetails.items.map((item, index) => (
              <li key={index}>
                {item.quantity} x {item.name}
              </li>
            ))}
          </ul>
          <p><strong>Total Price:</strong> ${orderDetails.totalPrice.toFixed(2)}</p>
        </div>
        <Link to="/">
          <button className="homeButton">Go Back to Home</button>
        </Link>
      </div>
    </div>
  );
}

export default Confirmation;
