import React from "react";
import Colors from "./colors";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Collapsbtn from "./collapsbutton";
import Size from "./size";

const Product = ({ item, onClick,onChange,onChangesiz}) => {
  const { id, name, price, url, colors, color, subject, size } = item;
  return (
    <>
      <div
        className="col-xl-3 col-md-4 col-sm-5  text-center p-2 border border-dark m-sm-4 shadow-lg "
        style={{ borderRadius: "30%" }}
      >
        <div className="slide-container">
          <Slide>
            {url.map((slideImages, index, url) => (
              <div className="each-slide bg-primry" key={index}>
                <div
                  className="img-fluid"
                  style={{
                    backgroundImage: `url(${url})`,
                    borderRadius: "100%",
                    height: "19rem",
                    backgroundRepeat: "round",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                >
                  <span>{slideImages.caption}</span>
                </div>
              </div>
            ))}
          </Slide>
        </div>

        <h4>{name}</h4>
        <h5>{price}تومان</h5>
        <div className="row justify-content-end">
          <div className="col-6 d-grid w-auto">
             <select id="testid" onChange={onChange}>
              <option value="0">رنگبندی</option>
              <Colors key={colors.lenght} Colorsname={colors} />
            </select>
            <select id="idtest" onChange={onChangesiz}>
              <option value="-1">سایز بندی</option>
              <Size key={size.lenght} sizename={size} />
            </select> 
          
          </div>

          <div className="col-6">
            <button
              className="btn btn-info btn-sm"
              onClick={() => onClick(item)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-cart-plus"
                viewBox="0 0 16 16"
              >
                <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                <path
                  d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0
                             0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5
                              0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div>
        <Collapsbtn id={id} name="بیشتر" subject={subject} />
        </div>
      </div>
    </>
  );
};

export default Product;
