import React from 'react'
import { Link } from 'react-router-dom'

function MyWork() {
  return (
    
    <>
        <div id="portfolio"  className='dark:bg-gray-800 pt-10 dark:text-white'>
      <div class="container">
        <div class="flex flex-wrap ">
          <div class="w-1/3 p-4">
            <img className="w-full"   src="/Myphoto/02.jpg"  alt="work1" />
            <div class="layer">
              <h3>Group Chat Webapp</h3>
              <p>
                Make a group and add the member at real time support using the socket.io like Whatsapp.
              </p>
              <Link to="https://github.com/codepath26/Gchat" rel="noopener" target="_blank"
                ><i class="fa-solid fa-arrow-up-right-from-square"></i
              ></Link>
            </div>
          </div>
          <div class="w-1/3 p-4">
            <img className="w-full"  src="/Myphoto/03.jpg" alt="work2" />
            <div class="layer">
              <h3>Expense Tracker</h3>
              <p>
                Using the MySQL database for the storing the data you can Create, Read, Update, Delete items, Razore pay payment Gatway support for premium user,support pagination. 
              </p>
              <Link to="https://github.com/codepath26/ExpenseTracker-MySQL" rel="noopener" target="_blank"
                ><i class="fa-solid fa-arrow-up-right-from-square"></i
              ></Link>
            </div>
          </div>
          <div class="w-1/3 p-4">
            <img className="w-full"  src="/Myphoto/04.jpg" alt="work3"/>
            <div class="layer">
              <h3>Ecommerce Website</h3>
              <p>
                Admin can add the product delete and update the product also you can shop the product, add to cart and place the order and also get the full details of the product.
              </p>
              <Link to="https://github.com/codepath26/E-commerce-Mongoose" rel="noopener" target="_blank"
                ><i class="fa-solid fa-arrow-up-right-from-square"></i
              ></Link>
            </div>
          </div>
          <div class="w-1/3 p-4">
            <img className="w-full"  src="/Myphoto/05.jpg" alt="work4" />
            <div class="layer">
              <h3>GaliRestro</h3>
              <p>
               restorant
              </p>
              <Link to="https://galirestro.netlify.app/" target="_blank" rel="noopener"
                ><i class="fa-solid fa-arrow-up-right-from-square"></i
              ></Link>
            </div>
          </div>
          <div class="w-1/3 p-4">
            <img className="w-full"  src="/Myphoto/06.jpg" alt="work5"/>
            <div class="layer">
              <h3>Password Generator</h3>
              <p>
                Now you can generate customized passwords using the desired length and choose to include numbers and characters. You can also copy the generated password to paste it.
              </p>
              <Link target="_blank" to="https://passwordgenerator90.netlify.app/" rel="noopener"
                ><i class="fa-solid fa-arrow-up-right-from-square"></i
              ></Link>
            </div>
          </div>
          <div class="w-1/3 p-4">
            <img className="w-full"   src="/Myphoto/03.jpg" alt="work7"/>
            <div class="layer">
              <h3>Tic Tac Toe</h3>
              <p>
                Experience the classic excitement of Tic Tac Toe brought to life in our fully deployed and user-friendly game, offering endless fun and strategic challenges for players of all ages.
              </p>
              <Link to="https://zerocross01.netlify.app/" target="_blank" rel="noopener"
                ><i class="fa-solid fa-arrow-up-right-from-square"></i
              ></Link>
            </div>
          </div>
          <div class="w-1/3 p-4">
            <img className="w-full"  src="/Myphoto/01.jpg" alt="work6"/>
            <div class="layer">
              <h3>MyMart</h3>
              <p>MyMart is a user-friendly shopping app.Add and manage products, add items to their cart, and place orders,provides detailed product information, edit product details.</p>
              <Link target="_blank" to="https://github.com/codepath26/MyMart" rel="noopener"
                ><i class="fa-solid fa-arrow-up-right-from-square"></i
              ></Link>
            </div>
          </div>
        </div>
        <Link to="#" class="btn">See more</Link>
      </div>
    </div>
    
    </>
  )
}

export default MyWork