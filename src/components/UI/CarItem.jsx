import React from "react";

const CarItem = (props) => {
  const { name, category, img, price, quantity } = props.item;
  return (
    <div className="car__item">
      <div className="car__item-top">
        <div className="car__item-tile">
          <h3>{name}</h3>
          <span>
            <i class="ri-heart-line"></i>
          </span>
        </div>
        <p>{category}</p>
      </div>

      <div className="car__img">
        <img style={{ width: "200px" }} src={img} alt="" />
      </div>

      <div className="car__item-bottom">
        <div className="car__bottom-left">
          <p>
            <i class="ri-user-line"></i> {}
          </p>
          <p>
            <i class="ri-repeat-line"></i>
            {}
          </p>
        </div>

        <p className="car__rent">${price}/d</p>
      </div>
    </div>
  );
};

export default CarItem;
