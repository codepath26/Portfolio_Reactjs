import React from "react";
import { Link } from "react-router-dom";
function Cart({ title, imgsrc, description ,srccode }) {
  return (
    <>
      <div class="md:w-1/3 mt-3 md:m-0 p-4 w-full rounded-[10px] shadow-sd hover:shadow-xl transition-shadow duration-300 ">
        <div className="text-center mb-2 text-lg font-bold">{title}</div>
        <div className="rounded-[10px]">
          <img
            className="w-full h-full object-cover rounded-[10px]"
            src={imgsrc}
            alt="work1"
          />
        </div>
        <div class="layer">
          <p>{description}</p>
          <div className="text-center mt-2">
            <Link
              to={srccode}
              rel="noopener"
              target="_blank"
            >
              <i class="fa-solid fa-arrow-up-right-from-square text-indigo-500"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
