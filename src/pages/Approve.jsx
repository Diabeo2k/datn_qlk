import React from "react";
import sellCar from "../assets/images/sell-car.png";
import "../styles/sell-car.css";
import TrackingChart from "../charts/TrackingChart";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { PRODUCT } from "../DATA";
import { REQUIRE } from "./../DATA";
import { FiLoader } from "react-icons/fi";
import { Link } from "react-router-dom";

const Approve = () => {
  const percentage = 55;
  const percentage02 = 45;
  return (
    <div className="sell__car">
      <div className="sell__car-wrapper">
        <h2 className="sell__car-title">Sell Cars</h2>
        <div className="sell__car-top">
          {PRODUCT && PRODUCT[0] && (
            <div className="sell__car-img">
              <h2>{PRODUCT[0].name}</h2>
              <img src={PRODUCT[0].img} alt="" />
            </div>
          )}

          <div className="tracking__history">
            <h3>Tracking History</h3>
            <TrackingChart />
          </div>
        </div>

        <div className="offer__wrapper">
          <div className="offer__top">
            <h2 className="sell__car-title">Requires</h2>

            <div className="filter__widget-01">
              <select>
                <option value="toyota">Toyota</option>
                <option value="bmw">BMW</option>
                <option value="audi">Audi</option>
              </select>
            </div>
          </div>

          <div className="offer__list">
            {REQUIRE?.map((i) => (
              <div className="offer__item">
                <div className="box__01">
                  <h3 className="client__name">Require {i.type}</h3>
                  <h6 className="avg__price">
                    <span>{i.status}</span>
                  </h6>

                  <h6 className="market__price">22th Jun 2015</h6>
                  <span className="arrow__key">
                    <Link to={`/require/${i.id}`}>
                      <i class="ri-arrow-right-line"></i>
                    </Link>
                  </span>
                </div>

                <div className="circle__wrapper">
                  <div className="box__02">
                    <span>
                      <FiLoader />
                    </span>
                  </div>
                  <h4> {i.status}</h4>
                </div>

                <div className="box__03">
                  <span className="model__spend-icon">
                    <i class="ri-car-line"></i>
                  </span>
                  <h6 className="spend__amount">$1174</h6>
                  <p className="spend__title">Model Spend</p>
                </div>

                <div className="box__04">
                  <span className="model__spend-icon">
                    <i class="ri-share-forward-line"></i>
                  </span>
                  <h6 className="spend__amount">$1174</h6>
                  <p className="spend__title">Model Spend</p>
                </div>

                <div className="box__05">
                  <span className="model__spend-icon">
                    <i class="ri-money-dollar-circle-line"></i>
                  </span>
                  <h6 className="spend__amount">$811</h6>
                  <p className="spend__title">Spend Per Unit Turned</p>
                </div>
              </div>
            ))}

            <div className="offer__item">
              <div className="box__01">
                <h3 className="client__name">Jhon Doe</h3>
                <h6 className="avg__price">
                  $11,605 <span>average price</span>
                </h6>

                <h6 className="market__price">Market average is $11,244</h6>
                <span className="arrow__key">
                  <i class="ri-arrow-right-line"></i>
                </span>
              </div>

              <div className="circle__wrapper">
                <div className="box__02">
                  <CircularProgressbar
                    value={percentage02}
                    text={`${percentage02}%`}
                    styles={buildStyles({
                      pathColor: "#01d293",
                      textColor: "#fff",
                      trailColor: "#0b0c28",
                      textSize: "18px",
                    })}
                  />
                </div>
                <h4>Impression Share</h4>
              </div>

              <div className="box__03">
                <span className="model__spend-icon">
                  <i class="ri-car-line"></i>
                </span>
                <h6 className="spend__amount">$1174</h6>
                <p className="spend__title">Model Spend</p>
              </div>

              <div className="box__04">
                <span className="model__spend-icon">
                  <i class="ri-share-forward-line"></i>
                </span>
                <h6 className="spend__amount">$1174</h6>
                <p className="spend__title">Model Spend</p>
              </div>

              <div className="box__05">
                <span className="model__spend-icon">
                  <i class="ri-money-dollar-circle-line"></i>
                </span>
                <h6 className="spend__amount">$811</h6>
                <p className="spend__title">Spend Per Unit Turned</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approve;
