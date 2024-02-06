import React from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";

function MyWork() {
  return (
    <>
      <div id="portfolio" className="dark:bg-gray-800   pt-10 dark:text-white">
        <div class="w-full  p-3">
          <div class="flex flex-col md:w-auto w-full items-center sm:items-start sm:flex-row flex-wrap  border-b mb-5  p-3 ">
            <Cart
              title="Group Chat Webapp"
              description=" Make a group and add the member at real time support using the
                  socket.io like Whatsapp."
              imgsrc="/Myphoto/02.jpg"
              srccode=""
            />
            <Cart
              title="Ecommerce Website"
              description="Admin can add the product delete and update the product also
                  you can shop the product, add to cart and place the order and
                  also get the full details of the product."
              imgsrc="/Myphoto/02.jpg"
              srccode=""
            />
            <Cart
              title="Expense Tracker"
              description="Using the MySQL database for the storing the data you can
                  Create, Read, Update, Delete items, Razore pay payment Gatway
                  support for premium user,support pagination."
              imgsrc="/Myphoto/02.jpg"
              srccode="https://github.com/codepath26/ExpenseTracker-MySQL"
            />
            <Cart
              title="GaliRestro"
              description="restorant"
              imgsrc="/Myphoto/02.jpg"
              srccode=""
            />
            <Cart
              title="Password Generator"
              description=" Now you can generate customized passwords using the desired
                  length and choose to include numbers and characters. You can
                  also copy the generated password to paste it."
              imgsrc="/Myphoto/02.jpg"
              srccode=""
            />
            <Cart
              title="MyMart"
              description="MyMart is a user-friendly shopping app.Add and manage
                  products, add items to their cart, and place orders,provides
                  detailed product information, edit product details."
              imgsrc="/Myphoto/02.jpg"
              srccode="https://github.com/codepath26/MyMart"
            />
            <Cart
              title="Tic Tac Toe"
              description="Experience the classic excitement of Tic Tac Toe brought to
                  life in our fully deployed and user-friendly game, offering
                  endless fun and strategic challenges for players of all ages."
              imgsrc="/Myphoto/02.jpg"
              srccode="https://github.com/codepath26/MyMart"
            />
            </div>
            <div className="text-center my-2 ">
              <Link
                to="https://github.com/codepath26"
                className="text-white rounded py-1 px-3  font-bold text-lg bg-black "
              >
                See more
              </Link>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default MyWork;
