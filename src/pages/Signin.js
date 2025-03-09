import React from "react";
import { useNavigate } from "react-router-dom"; // Import du hook
import PizzaLeft from "../assets/signinpizza.jpg";
import "../styles/Signin.css";

function Signin() {
  const navigate = useNavigate(); // Initialisation du hook

  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    // Simulez une validation ou une action côté serveur ici
    // Exemple : envoi des données
    console.log("Formulaire soumis");

    // Navigation vers la page de confirmation
    navigate("/confirmation");
  };

  return (
    <div className="signin">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1>Sign In</h1>

        <form id="signin-form" method="POST" onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input
            name="name"
            placeholder="Enter full name..."
            type="text"
            required
          />
          <label htmlFor="email">Email</label>
          <input
            name="email"
            placeholder="Enter email..."
            type="email"
            required
          />
          <label htmlFor="address">Address</label>
          <input
            name="address"
            placeholder="Enter your address..."
            type="text"
            required
          />

          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Enter phone number..."
            type="tel"
            pattern="[0-9]{8}"
            maxLength="8"
            title="Please enter a valid 8-digit phone number"
            required
          />
          <button type="submit">Log in</button>
        </form>
      </div>
    </div>
  );
}

export default Signin;

