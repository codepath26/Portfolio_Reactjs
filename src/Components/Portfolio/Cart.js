import React from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";
function Cart({
  title,
  imgsrc,
  description,
  srccode,
  technologies,
  functionality,
}) {
  return (
    <>
      <div class="md:w-1/3 mt-3 md:m-0 p-4 w-full rounded-[10px] shadow-sd hover:shadow-xl transition-shadow duration-300 ">
        <div className="text-center text-indigo-700 mb-2 text-lg font-bold">
          {title}
        </div>
          <LazyLoad height={200} className="rounded-[10px] ">
            <img
              className="w-full h-full object-cover rounded-[10px]"
              src={imgsrc}
              alt="work1"
            />
          </LazyLoad>
        <div class="layer  mt-2">
          <p>{description}</p>
          <p className="mt-2">
            <strong>Functionality: </strong>
            {functionality}
          </p>
          <p className="mt-2">
            <strong>Technologies: </strong>
            {technologies}
          </p>
          <div className=" mt-2">
            <span className="font-bold">Check Now</span>
            <Link className="ms-2" to={srccode} rel="noopener" target="_blank">
              <i class="fa-solid fa-arrow-up-right-from-square text-indigo-500"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
