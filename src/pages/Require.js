import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { REQUIRE } from "../DATA";
import { BiImport } from "react-icons/bi";

const Require = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  useEffect(() => {
    const get = () => {
      const res = REQUIRE?.find((item) => item.id == id);
      setItem(res);
    };
    get();
  }, []);
  console.log(item);
  return (
    <div className="bill-container">
      <div className="RQcard">
        <div className="RQcard-header">
          <img
            src="https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg"
            alt="rover"
          />
        </div>
        <div className="RQcard-body">
          <span className="tag tag-teal">{item?.type}</span>
          <h4>
            {item?.staff?.username} required {item?.type} items
          </h4>
          <p style={{ marginBottom: 0 }}>
            An exploration into the truck's polarising design
          </p>
          <div className="user" style={{ marginTop: 0 }}>
            <img
              src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo"
              alt="user"
            />
            <div className="user-info">
              <h5>{item?.staff?.username}</h5>
              <small>2h ago</small>
            </div>
          </div>
          <div className="product-list" style={{ width: "100%" }}>
            <div className="product">
              {item?.product?.map((i) => (
                <div>
                  <div class="RQcart__item">
                    <div class="RQcart__item__image">
                      <img src={i.img} alt="" />
                    </div>
                    <div class="RQcart__item__info">
                      <div class="RQcart__item__info__name">{i.name}</div>
                      <div class="RQcart__item__info__price">${i.price}</div>
                      <div class="RQcart__item__info__quantity">
                        Quantity: {i.quantity}
                      </div>
                    </div>
                    <div class="RQcart__item__type">
                      <span>
                        <BiImport />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div class="RQcart__btn">
            <button>ACCEPT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Require;
