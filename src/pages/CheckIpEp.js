import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { FiLoader } from "react-icons/fi";
import { Link } from "react-router-dom";
import { REQUIRE } from "../DATA";

const CheckIpEp = () => {
  const percentage = 55;
  const percentage02 = 45;
  return (
    <div>
      <div className="check-container">
        <div className="check-filter">
          <div class="wrapper">
            <div class="dropdown">
              <button id="dropdownBtnSort">
                Sort By <i class="fa-solid fa-chevron-down"></i>
              </button>
              <div id="dropdownSortOptions" class="dropdownSortOptions">
                <a href="#" class="sortOption">
                  Name <span>A - Z</span>
                </a>
                <a href="#" class="sortOption">
                  Name <span>Z - A</span>
                </a>
                <a href="#" class="sortOption">
                  Age <span>ASC</span>
                </a>
                <a href="#" class="sortOption">
                  Age <span>DESC</span>
                </a>
              </div>
            </div>

            <div class="dropdown">
              <button id="dropdownBtnFilter">
                Filter<i class="fa-solid fa-chevron-down"></i>
              </button>
              <div id="dropdownFilterOptions" class="dropdownFilterOptions">
                <a href="#" class="filterOption">
                  Right Handed
                </a>
                <a href="#" class="filterOption">
                  Left Handed
                </a>
              </div>
            </div>

            <button id="clearBtn">Reset</button>
          </div>
        </div>
        <div class="check-results">
          <div className="offer__list">
            {REQUIRE?.map((i) => (
              <div className="offer__item">
                <div className="box__01">
                  <h3 className="client__name">Require {i.type}</h3>
                  <h6 className="avg__price">
                    <span>{i.status}</span>
                  </h6>

                  <h6 className="market__price">15th October 2022</h6>
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

export default CheckIpEp;
