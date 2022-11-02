import React from "react";

const SingleCard = (props) => {
  const { title, totalNumber, icon } = props.item;
  return (
    <div className="single__card">

      

      <div className="card__content">
      <span className="card__icon">
        <i class={icon}></i>
      </span>
        <h4>{title}</h4>
        <span>{totalNumber}+</span>
      </div>
    </div>
  );
};

export default SingleCard;
