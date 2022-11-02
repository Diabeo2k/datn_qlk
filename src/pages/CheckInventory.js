import React from "react";
import RecommendCarCard from "../components/UI/RecommendCarCard";
import { PRODUCT } from "../DATA";

const CheckInventory = () => {
  return (
    <div>
      <div className="checkIn-container">
        <h1>Inventory</h1>
      </div>
      <div className="checkIn-result">
        <div className="recommend__cars-wrapper">
          {PRODUCT.map((item) => (
            <RecommendCarCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CheckInventory;
