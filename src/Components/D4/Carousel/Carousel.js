import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { Link } from "react-router-dom";

function Carousel() {
  const slides = [
    {
      url: "https://youtu.be/017qKvwM8yM",
      img: "/D4poster/2.jpg",
    },
    {
      url: "https://youtu.be/jZZusG9SW54",
      img: "/D4poster/1.jpg",
    },
    {
      url: "https://youtu.be/HAQRplnEKec",
      img: "/D4Poster/7.jpg",
    },
    {
      url: "https://youtu.be/9oOUSsje6s8",
      img: "/D4Poster/12.jpg",
    },
    {
      url: "https://youtu.be/S1maHWq5Y0Q",
      img: "/D4Poster/16.jpg",
    },
    {
      url: "https://youtu.be/XVw247CHffw",
      img: "/D4Poster/14.jpg",
    },
    {
      url: "https://youtu.be/xnkp7TtNMF0",
      img: "/D4Poster/10.jpg",
    },
    {
      url: "https://youtu.be/a-oEoUVyC3s",
      img: "/D4Poster/15.jpg",
    },
    {
      url: "https://youtu.be/Iip7hH1YJ_s",
      img: "/D4Poster/3.jpg",
    },
    {
      img: "/D4poster/4.jpg",
      url: "https://youtu.be/8lCudq5YbeM",
    },

    {
      url: "https://youtu.be/mKk6Q7ov3fE",
      img: "/D4Poster/5.jpg",
    },

    {
      url: "https://youtu.be/R2wIMTO2JRI",
      img: "/D4Poster/6.jpg",
    },

    {
      url: "https://youtu.be/9rgExFyxYyM",
      img: "/D4Poster/8.jpg",
    },
    {
      url: "https://youtu.be/S2CxnBpUJNE",
      img: "/D4Poster/9.jpg",
    },
    {
      url: "https://youtu.be/6rqTJxO1HJE",
      img: "/D4Poster/13.jpg",
    },

 
    {
      url: "https://youtu.be/FJViqnKz3eA",
      img: "/D4Poster/17.jpg",
    },
    {
      url: "https://youtu.be/XjaEyBYVrPQ",
      img: "/D4Poster/18.jpg",
    },
  ];


  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="   max-w-[1100px] h-[780px] w-full  m-auto py-7 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].img})` }}
        className="dark:shadow-md dark:border dark:border-salte-500 dark:shadow-white  dark:transition-shadow   w-full h-[600px] rounded-2xl bg-center bg-cover duration-500 relative"
      >
        <Link
          className="text-xl font-bold bg-indigo-700 py-1 px-2 cursor-pointer rounded-lg text-white absolute bottom-10 left-1/2 transform -translate-x-1/2 border-none "
          to={
            `${slides[currentIndex].url}` ? `${slides[currentIndex].url}` : ""
          }
          target="_blank"
        >
          Go And Watch The Video
        </Link>
      </div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
