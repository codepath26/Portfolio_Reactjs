import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { Link } from "react-router-dom";

function Carousel() {
  const slides = [
    {
      url: "https://youtu.be/017qKvwM8yM",
      img: "https://cdn.pixabay.com/photo/2023/12/08/08/28/08-28-20-251_1280.jpg",
    },
    {
      url: "https://youtu.be/jZZusG9SW54",
      img: "https://cdn.pixabay.com/photo/2023/12/08/08/10/08-10-34-50_1280.jpg",
    },
    {
      url: "https://youtu.be/HAQRplnEKec",
      img: "https://cdn.pixabay.com/photo/2023/12/08/08/32/08-32-53-447_1280.jpg",
    },
    {
      url: "https://youtu.be/9oOUSsje6s8",
      img: "https://cdn.pixabay.com/photo/2023/12/08/08/28/08-28-48-862_1280.jpg",
    },
    {
      url: "https://youtu.be/S1maHWq5Y0Q",
      img: "https://cdn.pixabay.com/photo/2023/12/08/09/07/09-07-18-627_1280.jpg",
    },
    {
      url: "https://youtu.be/XVw247CHffw",
      img: "https://cdn.pixabay.com/photo/2023/12/08/08/29/08-29-03-352_1280.jpg",
    },
    {
      url: "https://youtu.be/xnkp7TtNMF0",
      img: "https://cdn.pixabay.com/photo/2023/12/08/09/10/09-10-34-991_1280.jpg",
    },
    {
      url: "https://youtu.be/a-oEoUVyC3s",
      img: "https://cdn.pixabay.com/photo/2023/12/08/09/08/09-08-39-151_1280.jpg",
    },
    {
      url: "https://youtu.be/Iip7hH1YJ_s",
      img: "https://cdn.pixabay.com/photo/2023/12/08/08/28/crazy-8437105_1280.jpg",
    },
    {
      img: "https://cdn.pixabay.com/photo/2023/12/08/09/00/09-00-51-452_1280.jpg",
      url: "https://youtu.be/8lCudq5YbeM",
    },

    {
      url: "https://youtu.be/mKk6Q7ov3fE",
      img: "https://cdn.pixabay.com/photo/2023/12/08/08/59/08-59-57-351_1280.jpg",
    },

    {
      url: "https://youtu.be/R2wIMTO2JRI",
      img: "https://cdn.pixabay.com/photo/2023/12/08/08/59/08-59-54-904_1280.jpg",
    },

    {
      url: "https://youtu.be/9rgExFyxYyM",
      img: "https://cdn.pixabay.com/photo/2023/12/08/08/59/08-59-56-104_1280.jpg",
    },
    {
      url: "https://youtu.be/S2CxnBpUJNE",
      img: "https://cdn.pixabay.com/photo/2023/12/08/08/59/08-59-57-63_1280.jpg",
    },
    {
      url: "https://youtu.be/6rqTJxO1HJE",
      img: "https://cdn.pixabay.com/photo/2023/12/08/08/32/08-32-58-710_1280.jpg",
    },

 
    {
      url: "https://youtu.be/FJViqnKz3eA",
      img: "https://cdn.pixabay.com/photo/2023/12/08/09/10/09-10-43-22_1280.jpg",
    },
    {
      url: "https://youtu.be/XjaEyBYVrPQ",
      img: "https://cdn.pixabay.com/photo/2023/12/08/09/10/09-10-42-518_1280.jpg",
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
    <div className="border border-red-600 w-[50%] m-auto py-7 px-4 relative ">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].img})` }}
        className="dark:shadow-md dark:border dark:border-salte-500 dark:shadow-white  dark:transition-shadow   w-full  rounded-2xl bg-center bg-cover duration-500 relative"
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
