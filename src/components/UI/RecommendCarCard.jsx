import React from "react";

const RecommendCarCard = (props) => {
  const { name, img, price, quantity } = props.item;
  return (
    <div className="recommend__car-card">
      <div className="recommend__car-top">
        <h5>
          <span>
            <i class="ri-refresh-line"></i>
          </span>
          {90}% Recommended
        </h5>
      </div>

      <div className="recommend__car-img">
        <img src={img} alt="" />
      </div>
      <div className="recommend__car-bottom">
        <h4>{name}</h4>
        <div className="recommend__car-other">
          <div className="recommend__icons">
            <p>
              <i class="ri-repeat-line"></i>
              {quantity} items
            </p>
            <p>
              <i class="ri-settings-2-line"></i>
            </p>
            <p>
              <i class="ri-timer-flash-line"></i>
            </p>
          </div>
          <span>${price} </span>
        </div>
      </div>
    </div>
  );
};

export default RecommendCarCard;
