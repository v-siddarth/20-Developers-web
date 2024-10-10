import React, { useState, useEffect } from "react";
import ReactOdometer from "react-odometerjs";  // Import the component

const CounterWrapFourItem = ({ amount, suffix, title }) => {
  const [currentAmount, setCurrentAmount] = useState(0);  // Start from 0

  useEffect(() => {
    // Animate to the target amount after component mounts
    setTimeout(() => {
      setCurrentAmount(amount);  // Animate to the correct amount
    }, 500);  // Small delay to ensure the animation effect

  }, [amount]);  // Re-run this effect whenever the amount changes

  return (
    <div className="counter-item-four">
      <h2 className="count">
        <span className="odometer" data-count={currentAmount}>
          <ReactOdometer
            value={currentAmount}  // Set the value for the odometer
            format="d"  // Simple number format
            duration={1000}  // Animation duration in milliseconds
            animation="count"  // Use count animation method
          />
        </span>
        {suffix}
      </h2>
      <p>{title}</p>
    </div>
  );
};

export default CounterWrapFourItem;
