import Cart from "./Cart";

function SimpleProjects() {
  return (
    <>
      <h1 className="font-bold text-lg text-indigo-800 my-5">
          <span className="p-2 bg-gray-300 dark:bg-gray-800 dark:text-white">
            Backend/Frontend Project
          </span>
        </h1>
        <div className="flex flex-col md:w-auto w-full items-center sm:items-start sm:flex-row flex-wrap  border-b  shadow-md dark:border-black dark:border-opacity-40 p-3 ">
          <Cart
            title="Expense Tracker-mysql"
            description="Using the MySQL database for the storing the data you can
                  Create, Read, Update, Delete items, Razore pay payment Gatway
                  support for premium user,support pagination. User Authentication"
            imgsrc="/images/expense-sql.png"
            functionality="CURD Operation"
            technologies="Express.js, Sequelize, html, css, javascript"

            srccode="https://github.com/codepath26/ExpenseTracker-MySQL"
          />

          <Cart
            title="Shopping app-mysql"
            description="Shop whatever you want This is the shoping app in which suplier can add the product and customer can buy that product"
            technologies="SSR , Node.js , Express.js , mysql , sequelize, html, css, javascript"
            imgsrc="/images/shopping-sql.png"
            functionality="Admin/Customer"
            srccode="https://github.com/codepath26/MyMart"
          />
          <Cart
            title="Expense Tracker-mongoDB"
            description="Using the MongoDB database for the storing the data you can
                  Create, Read, Update, Delete items, Razore pay payment Gatway
                  support for premium user,support pagination. User Authentication"
            imgsrc="/images/expense-mongo.png"
            functionality="CURD Operation"
            technologies='Express.js, Mongoose, html, css, javascript'
            srccode="https://github.com/codepath26/ExpenseTracker-MySQL"
          />

          <Cart
            title="Shopping app-MongoDB"
            description="Shop whatever you want This is the shoping app in which suplier can add the product and customer can buy that product"
            technologies=" Node.js , Express.js ,MongoDB , Mongoose"
            functionality="Admin/Customer "
            imgsrc="/images/mymart.png"
            srccode="https://github.com/codepath26/MyMart"
          />
          <Cart
            title="GaliRestro"
            description="restorant, in which you can add the diffrent items to the cart and cart updated automatically"
            functionality="Cart"
            technologies="react.js react-router-dom ContextAPI"
            imgsrc="/images/galirestro.png"
            srccode="https://galirestro.netlify.app/"
          />
          <Cart
            title="Redux-demo-cart"
            description="This  is the simple app for the understanding the redux working in reactjs"
            technologies="react.js  redux firebase"
            imgsrc="/images/redux.png"
            functionality="Cart"
            srccode="https://galirestro.netlify.app/"
          />
          <Cart
            title="Simple Expense Tracker"
            description="You can simply add expenses. The fun part is that you can check the expenses in a bar format, where the bar is fully filled in the month where your expense is highest."
            technologies="react.js , react-router-dom"
            functionality="Filling Bars"
            imgsrc="/images/simple_expense_tracker.png"
            srccode=""
          />
          <Cart
            title="Analog Clock"
            functionality="Time!"
            description="Watch Your Good Time"
            technologies="HTML, CSS, JAVASCRIPT "
            imgsrc="/images/analog.png"
            srccode="https://analogwatch01.netlify.app/"
          />
          <Cart
            title="Password Generator"
            description="Single Component which generate the password according to you Preference Try it"
            technologies="react.js"
            functionality="CopyToClipboard"
            imgsrc="/images/pass-generator.png"
            srccode="https://passwordgenerator90.netlify.app/"
          />
        </div>
    
    </>
  )
}

export default SimpleProjects