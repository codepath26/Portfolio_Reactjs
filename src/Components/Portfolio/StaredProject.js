import React from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";

function StaredProject() {
  return (
    <>
      <div class="w-full  p-3">
        <h1 className="border-b dark:border-black dark:border-opacity-40 dark:shadow-md border-gray-300 shadow-md text-center font-bold text-xl">
          Stared Projects
        </h1>
        <h1 className="font-bold text-lg text-indigo-800 my-5">
          <span className="p-2 bg-gray-300 dark:bg-gray-800 dark:text-white">
            Full Stack Project
          </span>
        </h1>

        <div className="flex flex-col md:w-auto w-full items-center sm:items-start sm:flex-row flex-wrap  border-b shadow-md dark:border-black dark:border-opacity-40 mb-5  p-3 ">
          <Cart
            title="Ecommerce Website"
            description="Admin can add the product delete and update the product also
                  you can shop the product, add to cart and place the order and
                  also get the full details of the product."
            technologies={
              "react.js , react-router-dom , tailwind css , express.js , Mongoose"
            }
            functionality="Responsive UI,Payment Gateway(Razorpay), User Authentication"
            imgsrc="/images/ecom.jpg"
            srccode="#"
          />
          <Cart
            title="Client Mailbox"
            description="Now you will getting the clients mails and also your are able to send them also  and you can read delete and update the mail."
            technologies={
              "react.js , react-router-dom , tailwind css , express.js , Mongoose"
            }
            functionality="Email, Responsive UI"
            imgsrc="/images/mailbox1.jpg"
            srccode="https://client-mail-box.netlify.app/signup"
          />
          <Cart
            title="Group Chat web-app"
            description=" Make a group and add the member at real time support using the
                  socket.io like Whatsapp. Also one to one chat supported."
            technologies={
              "Soket.io , react.js , react-router-dom , tailwind css , express.js , bcrypt,cors,  jsonwebtoken,  mysql2, sequelize,  socket.io"
            }
            functionality="OneToOne Chat, Group Chat, User Specifice"
            imgsrc="/images/group-chat.jpg"
            srccode="https://github.com/codepath26/Gchat"
          />
          <Cart
            title="Expense Tracker"
            description="Now You can add your expenses and saving or income into this website and it's give you the track how much you earn and spend and how much amount you save and all the things related  to the profit and loss with chart functionality"
            technologies={
              "react.js , react-router-dom , tailwind css , express.js , Mongoose ,react-chartjs-2"
            }
            functionality="Responsive UI, Chart Representation"
            imgsrc="/images/full-expense.png"
            srccode="https://daily-expense-check.netlify.app"
          />
          <Cart
            title="Parth's Portfolio"
            description="This is all about me"
            technologies={
              "react.js , react-router-dom , tailwind css , responsice Ui"
            }
            functionality="Responsive UI"
            imgsrc="/images/porfolio.png"
            srccode="https://daily-expense-check.netlify.app"
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
    </>
  );
}

export default StaredProject;
